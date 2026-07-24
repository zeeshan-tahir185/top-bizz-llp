"use client";
import { Form, Input, Button } from "antd";
import { FaUser, FaEnvelope, FaPhoneAlt, FaCommentDots } from "react-icons/fa";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

export default function ContactSection() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast.success("Your message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
        });
        form.resetFields();
      } else {
        const errorData = await response.json();
        toast.error(
          errorData.message || "Failed to send your message. Please try again.",
          { position: "top-right", autoClose: 3000 }
        );
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative !py-20 !bg-gradient-to-b from-[#f8f9ff] via-white to-[#eef0ff] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-2 h-2 rounded-full !bg-gradient-to-r from-[#2A338E] to-[#B52B32] opacity-40 blur-[3px]"
            animate={{
              y: [0, -60, 0],
              x: [0, 30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 7 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.25,
              ease: "easeInOut",
            }}
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-[1440px] w-full mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="!text-3xl md:!text-4xl !font-extrabold text-center !text-[#2A338E] !mb-14"
        >
          Get in Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center md:!text-left"
          >
            <h3 className="!text-2xl !font-bold !text-[#2A338E] mb-6">
              Connect with Top Biz LLP
            </h3>
            <p className="!text-gray-700 !text-base md:!text-lg mb-8 leading-relaxed">
              Let’s discuss how our specialized engineering, automation, and
              procurement solutions can empower your next project. Reach out —
              we’d love to collaborate.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="!text-[#B52B32] !text-xl" />
                <span className="!text-gray-700 !font-medium">
                  +92 51 8777600
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="!text-[#B52B32] !text-xl" />
                <span className="!text-gray-700 !font-medium">
                  info@topbizllp.pk
                </span>
              </div>
              <div className="flex items-center text-left gap-3">
                <FaCommentDots className="!text-[#B52B32] !text-xl" />
                <span className="!text-gray-700 !font-medium">
                  761, Lane 7-E, Gulistan Colony, Near Joyland, Rawalpindi
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="!bg-white !p-8 !rounded-2xl !shadow-[0_0_25px_rgba(42,51,142,0.15)] border-t-4 border-[#2A338E]"
          >
            <Form form={form} layout="vertical" onFinish={onFinish}>
              <Form.Item
                name="name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input
                  prefix={<FaUser className="!text-gray-500" />}
                  placeholder="Your Name"
                  size="large"
                  className="!rounded-lg"
                />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input
                  prefix={<FaEnvelope className="!text-gray-500" />}
                  placeholder="Your Email"
                  size="large"
                  className="!rounded-lg"
                />
              </Form.Item>

              <Form.Item
                name="phone"
                rules={[
                  { required: true, message: "Please enter your phone number" },
                ]}
              >
                <Input
                  prefix={<FaPhoneAlt className="!text-gray-500" />}
                  placeholder="Your Phone Number"
                  size="large"
                  className="!rounded-lg"
                />
              </Form.Item>

              <Form.Item
                name="message"
                rules={[
                  { required: true, message: "Please enter your message" },
                ]}
              >
                <Input.TextArea
                  placeholder="Your Message"
                  rows={4}
                  size="large"
                  className="!rounded-lg"
                />
              </Form.Item>

              <Form.Item>
                <motion.div whileHover={{ scale: 1.03 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    loading={loading}
                    className="!w-full !bg-gradient-to-r !from-[#2A338E] !to-[#B52B32] hover:!opacity-90 
                    !rounded-full !text-white !font-semibold !shadow-md !transition-all !duration-300 flex items-center justify-center gap-2"
                  >
                    Send Message <FaCommentDots />
                  </Button>
                </motion.div>
              </Form.Item>
            </Form>
          </motion.div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
