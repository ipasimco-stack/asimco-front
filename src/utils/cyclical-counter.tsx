// components/CyclicalCounter.tsx
import React, { useEffect, useState } from "react";
import { Card, Typography } from "antd";

const { Title } = Typography;

interface CyclicalCounterProps {
    targetNumber: number;
    title: string;
    intervalSeconds: number;
    countInterval?: number;
}

const CyclicalCounter: React.FC<CyclicalCounterProps> = ({
    targetNumber,
    title,
    intervalSeconds,
    countInterval = 1000,
}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let counter: NodeJS.Timeout;

        const startCounting = () => {
            setCount(0);
            counter = setInterval(() => {
                setCount((prev) => {
                    if (prev >= targetNumber) {
                        clearInterval(counter);
                        setTimeout(startCounting, intervalSeconds * 1000);
                        return prev;
                    }
                    return prev + 1;
                });
            }, countInterval);
        };

        startCounting();

        return () => {
            clearInterval(counter);
        };
    }, [targetNumber, intervalSeconds, countInterval]);

    return (
        <Card className="max-w-xs w-full mx-auto text-center p-6 shadow-lg rounded-xl">
            <Title level={2} className="flex flex-col items-center justify-center text-blue-600">
                <p>
                    {count}
                </p>
                <h5>
                    {title}
                </h5>
            </Title>
        </Card>
    );
};

export default CyclicalCounter;
