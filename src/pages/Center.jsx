import React, { useEffect, useState} from 'react';
import { Button,  Row,Space,Col,Card,Menu, Avatar, List, message,Divider,Descriptions,Table,Tag,Modal,Input,Form,Checkbox} 
from 'antd';
const fakeDataUrl =
  'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
const ContainerHeight = 400;
const { Meta } = Card;
const data = [
    {
      key: '1',
      name: 'John Brown',
    //   age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['默认地址'],
    },
    {
      key: '2',
      name: 'Jim Green',
    //   age: 42,
      address: 'London No. 1 Lake Park',
      tags: [],
    },
    {
      key: '3',
      name: 'Joe Black',
    //   age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: [],
    },
    {
        key: '4',
        name: 'Joe Black',
      //   age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: [],
      },
      {
        key: '5',
        name: 'Joe Black',
      //   age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: [],
      },
  ];
const columns = [
    {
      title: '收货人',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    // {
    //   title: 'Age',
    //   dataIndex: 'age',
    //   key: 'age',
    // },
    {
      title: '收货地址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '是否为默认地址',
      key: 'tags',
      align: 'center',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
        title: <Button type="primary" style={{fontWeight:"bolder"}}>新增地址</Button>,
        key: 'action',
        align: 'center',
        render: (_, record) => (
          <Space size="middle">
            <Button type="text">删除地址</Button>
          </Space>
        ),
      },
  ];
// 
const App = () => {
    const CollectionCreateForm = ({ visible, submitMap,onCancel, currentDetailData }) => {
      const [form] = Form.useForm();
      const layout = {
          labelCol: { span: 5 },
          wrapperCol: { span: 18 },
      };
      let initValues = currentDetailData == undefined || currentDetailData.length == 0 ? {} :
            {
                name:currentDetailData.name,
                crs:currentDetailData.crs,
            }
            
    form.setFieldsValue(initValues)
    return (
        <Modal
            visible={visible}
            title="服务详情"
            onCancel={onCancel}
            width={800}
            destroyOnClose={true}
            onOk={() => {
                form
                .validateFields()
                .then(values => {
                    form.resetFields();
                    form.setFieldsValue(values)
                    submitMap(values);
                })
                .catch(info => {
                    console.log('校验失败:', info);
                });
            }}
        >
        <Form
            form={form}
            {...layout}
            name="serverDetail"
            initialValues={initValues}
        >
            <Form.Item label="名称" name="name" >
                <Input/>
            </Form.Item>
            <Form.Item label="坐标系信息" name="crs">
                <Input disabled/>
            </Form.Item>
            
        </Form>
        </Modal>
  );
      return(
       <Row >
        <Col>
            <Card>
            <div style={{
                height: 250,width:700}}>
                <Descriptions title="用户信息" layout="horizontal">
                    <Descriptions.Item label="用户名">有钱人</Descriptions.Item>
                    <Descriptions.Item label="联系方式">159763XXXXX</Descriptions.Item>
                    <Descriptions.Item label="默认地址">江苏省南京市梅园快递中心</Descriptions.Item>
                    <Descriptions.Item label="余额">20000</Descriptions.Item>
                </Descriptions>
                <Button onclick={CollectionCreateForm}>余额充值</Button>
            </div>
            </Card>
        </Col>
        <Col>
            <Row style={{marginTop:10}}></Row>
            <Row>
                    <Card
                        hoverable="true"
                        style={{
                        height:300,
                        width:200,
                        marginLeft:20,
                        marginRight:0
                        }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"  />}
                    >
                    </Card>
            </Row>
        </Col>
        <Row>
            {/* <Card style={{marginTop:20,height: 250,width:980}}> */}
                <Table  columns={columns} dataSource={data} scroll={{y:200,}} style={{marginTop:20,height: 250,width:970}}/>
            {/* </Card> */}
        </Row>
        </Row>
    );
}

export default App;