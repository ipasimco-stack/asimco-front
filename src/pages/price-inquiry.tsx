import React from "react";
import { Form, Input, Button, Select, Upload, message, Divider, Row, Col } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const { Option } = Select;

const PriceInquiry: React.FC = () => {
    const [form] = Form.useForm();

    const handleFinish = (values: any) => {
        console.log("Form Values:", values);
        message.success("اطلاعات شما با موفقیت ثبت شد");
        form.resetFields();
    };

    return (
        <div className="c_container !mb-[100px] !mt-[230px]">
            <Divider orientation="left" orientationMargin={0} className="!font-bold">
                فرم استعلام قیمت
            </Divider>

            <Form form={form} layout="vertical" className="!mt-12" onFinish={handleFinish}>
                <Row gutter={16}>
                    <Col xs={24} md={12}>
                        <Form.Item
                            label="نام و نام خانوادگی"
                            name="fullname"
                            rules={[{ required: true, message: "لطفا نام و نام خانوادگی را وارد کنید" }]}
                        >
                            <Input placeholder="نام و نام خانوادگی" />
                        </Form.Item>
                    </Col>

                    <Col xs={24} md={12}>
                        <Form.Item label="نام سازمان" name="organization">
                            <Input placeholder="نام سازمان" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col xs={24} md={12}>
                        <Form.Item
                            label="نوع سازمان"
                            name="organizationType"
                            rules={[{ required: true, message: "نوع سازمان را انتخاب کنید" }]}
                        >
                            <Select placeholder="انتخاب کنید">
                                <Option value="دولتی">دولتی</Option>
                                <Option value="نیمه دولتی">نیمه دولتی</Option>
                                <Option value="خصوصی">خصوصی</Option>
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col xs={24} md={12}>
                        <Form.Item
                            label="موبایل"
                            name="mobile"
                            rules={[
                                { required: true, message: "لطفا شماره موبایل را وارد کنید" },
                                { pattern: /^09[0-9]{9}$/, message: "شماره موبایل معتبر وارد کنید" },
                            ]}
                        >
                            <Input placeholder="مثال: 09123456789" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col xs={24} md={12}>
                        <Form.Item
                            label="ایمیل"
                            name="email"
                            rules={[{ type: "email", message: "ایمیل معتبر وارد کنید" }]}
                        >
                            <Input placeholder="ایمیل" />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item label="مشخصات" name="specs">
                    <TextArea rows={3} placeholder="مشخصات" />
                </Form.Item>

                <Form.Item label="توضیحات تکمیلی" name="description">
                    <TextArea rows={3} placeholder="توضیحات تکمیلی" />
                </Form.Item>


                <Form.Item label="آپلود فایل یا عکس" name="upload">
                    <Upload beforeUpload={() => false} accept=".jpg,.jpeg,.png,.pdf,.doc,.docx">
                        <Button icon={<UploadOutlined />}>انتخاب فایل</Button>
                    </Upload>
                    <p style={{ fontSize: 12, color: "gray", marginTop: 4 }}>
                        فرمت‌های مجاز: JPG, PNG, PDF, DOC, DOCX
                    </p>
                </Form.Item>

                <Form.Item style={{ textAlign: "center" }}>
                    <Button type="primary" htmlType="submit" size="large">
                        ارسال درخواست
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default PriceInquiry;
