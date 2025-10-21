"use client";
import { Form, Input, Button } from 'antd';
import { FaUser, FaEnvelope, FaPhone, FaCommentDots, FaPhoneAlt } from 'react-icons/fa';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactSection() {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                toast.success('Your message sent successfully!', {
                    position: 'top-right',
                    autoClose: 3000,
                });
                form.resetFields();
            } else {
                const errorData = await response.json();
                toast.error(errorData.message || 'Failed to send your message. Please try again.', {
                    position: 'top-right',
                    autoClose: 3000,
                });
            }
        } catch (error) {
            toast.error('An error occurred. Please try again later.', {
                position: 'top-right',
                autoClose: 3000,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-16 bg-gradient-to-r from-blue-50 to-gray-100">
            <div className="max-w-[1440px] w-full mx-auto px-4">
                <h2 className="text-3xl md:text-4xl !font-bold text-gray-800 text-center mb-12">
                    Get in Touch
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                            Connect with Top Biz LLP
                        </h3>
                        <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
                            We’re here to help you with your General Order Supplies, Import-Export solutions, and Government needs. Reach out to us today to discuss how we can support your business with tailored, high-quality solutions.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <FaPhoneAlt className="text-blue-600 text-xl" />
                                <span className="text-gray-700">+92 51 5451101</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-blue-600 text-xl" />
                                <span className="text-gray-700">info@topbizllp.pk</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaCommentDots className="text-blue-600 text-xl" />
                                <span className="text-gray-700">28/A, Jhelum Road, Morgah Morr, Near Hunain Hotel,
                                    Rawalpindi, 46000, Punjab, Pakistan</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-blue-600">
                        <Form form={form} layout="vertical" onFinish={onFinish}>
                            <Form.Item
                                name="name"
                                rules={[{ required: true, message: 'Please enter your name' }]}
                            >
                                <Input
                                    prefix={<FaUser className="text-gray-500" />}
                                    placeholder="Your Name"
                                    size="large"
                                    className="rounded-md"
                                />
                            </Form.Item>
                            <Form.Item
                                name="email"
                                rules={[
                                    { required: true, message: 'Please enter your email' },
                                    { type: 'email', message: 'Please enter a valid email' },
                                ]}
                            >
                                <Input
                                    prefix={<FaEnvelope className="text-gray-500" />}
                                    placeholder="Your Email"
                                    size="large"
                                    className="rounded-md"
                                />
                            </Form.Item>
                            <Form.Item
                                name="phone"
                                rules={[{ required: true, message: 'Please enter your phone number' }]}
                            >
                                <Input
                                    prefix={<FaPhoneAlt className="text-gray-500" />}
                                    placeholder="Your Phone Number"
                                    size="large"
                                    className="rounded-md"
                                />
                            </Form.Item>
                            <Form.Item
                                name="message"
                                rules={[{ required: true, message: 'Please enter your message' }]}
                            >
                                <Input.TextArea
                                    placeholder="Your Message"
                                    rows={4}
                                    size="large"
                                    className="rounded-md"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    size="large"
                                    loading={loading}
                                    className="w-full bg-blue-600 hover:!bg-blue-700 rounded-md flex items-center justify-center gap-2"
                                >
                                    Send Message <FaCommentDots />
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
}