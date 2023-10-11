import React, { useEffect, useState } from "react";
import { Button, Steps, Form, Input } from "antd";
import QQ from './QQ'

const TestPage = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const [form] = Form.useForm();

  const handleNext = async () => {
    try {
      await form.validateFields();
      setCurrentStep(currentStep + 1);
    } catch (error) {
      console.error("Step validation failed", error);
    }
  };

  const handleBack = () => setCurrentStep(currentStep - 1);

  const handleSubmit = async (values) => {
    const allValues = form.getFieldsValue();
    console.log("allValues === ", allValues);
    // try {
    //   const values = await form.validateFields();
    //   console.log("Form values:", values);
    //   // Send form data to server...
    // } catch (error) {
    //   console.error("Form validation failed", error);
    // }
  };

  const steps = [
    {
      title: "Step 1",
      content: (
        <div className="w-full h-full">
          <Form.Item
            label="商品名稱"
            name="name"
            rules={[{ required: true, message: "請輸入商品名稱!" }]}
          >
            <Input placeholder="為您的商品命名" />
          </Form.Item>
          <Form.Item
            label="商品描述"
            name="description"
            rules={[{ required: true, message: "請輸入商品描述!" }]}
          >
            <QQ/>
          </Form.Item>

        </div>
      ),
    },
    {
      title: "Step 2",
      content: (
        <Form.Item
          label="Field B"
          name="fieldB"
          rules={[{ required: true, message: "Please input field B!" }]}
        >
          <Input />
        </Form.Item>
      ),
    },
    {
      title: "Step 3",
      content: (
        <Form.Item
          label="Field C"
          name="fieldC"
          rules={[{ required: true, message: "Please input field C!" }]}
        >
          <Input />
        </Form.Item>
      ),
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));


  return (
    <div className="flex justify-center items-center w-full h-full border-solid border-[1px]">
      <Form form={form} layout="horizontal" className="flex flex-col justify-center items-center w-full h-full border-solid border-[1px]">
        <Steps current={currentStep} items={items} />
        {steps[currentStep].content}
        
        <div className="steps-action ">
          {currentStep > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => handleBack()} type="primary">
              Previous
            </Button>
          )}
          {currentStep < 2 && (
            <Button type="primary" onClick={() => handleNext()} className="bg-blue-200">
              Next
            </Button>
          )}
          {currentStep === 2 && (
            <Button type="primary" onClick={() => handleSubmit()} className="bg-blue-200">
              Done
            </Button>
          )}
        </div>
      </Form>
    </div>
  );

}

export default TestPage