// app/contact/page.tsx یا pages/contact.tsx (بسته به ساختار پروژه شما)
"use client";
import React from "react";
import { Form, Input, Button, Card, Divider } from "antd";
import { MailOutlined, UserOutlined, PhoneOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const ContactPage: React.FC = () => {
    const [form] = Form.useForm();

    const handleSubmit = (values: any) => {
        console.log("فرم ارسال شد:", values);
    };

    return (
        <section className="">
            <Divider orientation="left" orientationMargin={0} className="!font-bold">
                تماس با ما            </Divider>

            <div className="flex justify-center items-center py-16">
                <Card className="w-full max-w-2xl p-8 shadow-xl rounded-2xl">
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={handleSubmit}
                        className="space-y-4"
                    >
                        <Form.Item
                            label="نام و نام خانوادگی"
                            name="fullname"
                            rules={[{ required: true, message: "لطفا نام و نام خانوادگی را وارد کنید" }]}
                        >
                            <Input
                                prefix={<UserOutlined />}
                                placeholder="نام و نام خانوادگی"
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item
                            label="ایمیل"
                            name="email"
                            rules={[
                                { required: true, message: "لطفا ایمیل را وارد کنید" },
                                { type: "email", message: "ایمیل معتبر نیست" },
                            ]}
                        >
                            <Input
                                prefix={<MailOutlined />}
                                placeholder="ایمیل"
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item
                            label="شماره همراه"
                            name="phone"
                            rules={[
                                { required: true, message: "لطفا شماره همراه را وارد کنید" },
                                { pattern: /^09\d{9}$/, message: "شماره همراه معتبر نیست" },
                            ]}
                        >
                            <Input
                                prefix={<PhoneOutlined />}
                                placeholder="0912xxxxxxx"
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item
                            label="موضوع"
                            name="subject"
                            rules={[{ required: true, message: "لطفا موضوع را وارد کنید" }]}
                        >
                            <Input placeholder="موضوع پیام" size="large" />
                        </Form.Item>

                        <Form.Item
                            label="پیام"
                            name="message"
                            rules={[{ required: true, message: "لطفا پیام خود را وارد کنید" }]}
                        >
                            <TextArea rows={5} placeholder="متن پیام شما" />
                        </Form.Item>

                        <Form.Item className="text-center">
                            <Button
                                type="primary"
                                htmlType="submit"
                                size="large"
                                className="px-8 w-full rounded-xl"
                            >
                                ارسال
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </section>
    );
};

export default ContactPage;
