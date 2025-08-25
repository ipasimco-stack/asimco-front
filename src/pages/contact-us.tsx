"use client";
import React from "react";
import { Form, Input, Divider, Row, Col } from "antd";
import { MailOutlined, UserOutlined, PhoneOutlined } from "@ant-design/icons";
import Button from "@/components/shared/button";

const { TextArea } = Input;

const ContactPage: React.FC = () => {
    const [form] = Form.useForm();

    const handleSubmit = (values: any) => {
        console.log("فرم ارسال شد:", values);
    };

    return (
        <section className="w-full min-h-screen c_container !mt-[220px] !mb-[50px]">
            <Divider orientation="left" orientationMargin={0} className="!font-bold !mb-10">
                اطلاعات تماس
            </Divider>
            <div className="mb-[50px] flex flex-row-reverse items-start justify-between">
                <iframe
                    width="100%"
                    height="450"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=35.71928811105581,51.40628398972318&hl=fa&z=18&output=embed"
                    className=""
                ></iframe>

                <div className="w-full bg-gray-100 rounded-t-r-xl h-[450px] pt-0 pl-0 p-6 text-right flex flex-col items-center justify-center gap-10">
                    <p className="mb-2 text-center">
                        <span className="font-semibold">آدرس</span><br /><br />
                        تهران، میدان جهاد (فاطمی)، خیابان جویبار
                    </p>

                    <p className="mb-2 text-center">
                        <span className="font-semibold">تلفن ثابت</span><br /><br />
                        ۰۲۱۸۸۸۰۳۵۶۸ <br />
                        ۰۲۱۹۱۰۰۱۳۷۲
                    </p>

                    <p className="text-center">
                        <span className="font-semibold">همراه</span><br /><br />
                        ۰۹۲۲۱۵۳۵۹۱۳
                    </p>
                </div>
            </div>


            <Divider orientation="left" orientationMargin={0} className="!font-bold !mb-12">
                تماس با ما
            </Divider>

            <div className="max-w-5xl mx-auto">
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                    className="w-full"
                >
                    <Row gutter={16}>
                        <Col xs={24} md={12}>
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
                        </Col>

                        <Col xs={24} md={12}>
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
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col xs={24} md={12}>
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
                        </Col>

                        <Col xs={24} md={12}>
                            <Form.Item
                                label="موضوع"
                                name="subject"
                                rules={[{ required: true, message: "لطفا موضوع را وارد کنید" }]}
                            >
                                <Input placeholder="موضوع پیام" size="large" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item
                        label="پیام"
                        name="message"
                        rules={[{ required: true, message: "لطفا پیام خود را وارد کنید" }]}
                    >
                        <TextArea rows={6} placeholder="متن پیام شما" />
                    </Form.Item>

                    <Form.Item className="text-right">
                        <Button
                            variant="solid"
                            className="px-12 w-full py-4 md:w-auto"
                        >
                            ارسال
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </section>
    );
};

export default ContactPage;
