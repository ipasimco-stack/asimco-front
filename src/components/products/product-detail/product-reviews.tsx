import React, { useState } from "react";
import { Avatar, List, Form, Input, Button, Rate, Card } from "antd";

interface Review {
  author: string;
  content: string;
  rating: number;
}

const ProductReviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([
    { author: "کاربر ۱", content: "خیلی خوب بود", rating: 5 },
  ]);
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    setReviews([
      { author: "شما", content: values.comment, rating: values.rating },
      ...reviews,
    ]);
    form.resetFields();
  };

  return (
    <div className="bg-white shadow rounded-xl p-6 mt-8">
      <h2 className="text-lg font-bold mb-4">نظرات کاربران</h2>

      <List
        dataSource={reviews}
        itemLayout="vertical"
        renderItem={(item) => (
          <Card className="mb-4">
            <div className="flex items-center gap-3 mb-2">
              <Avatar>{item.author[0]}</Avatar>
              <span className="font-semibold">{item.author}</span>
            </div>
            <Rate disabled defaultValue={item.rating} />
            <p className="mt-2">{item.content}</p>
          </Card>
        )}
      />

      {/* فرم ثبت نظر */}
      <Form form={form} onFinish={handleSubmit} layout="vertical" className="mt-6">
        <Form.Item name="rating" label="امتیاز" rules={[{ required: true }]}>
          <Rate />
        </Form.Item>
        <Form.Item name="comment" label="نظر شما" rules={[{ required: true }]}>
          <Input.TextArea rows={3} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            ارسال نظر
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProductReviews;
