import React from 'react';
import {DownOutlined} from  "@ant-design/icons"
import { Input ,Space, Table, Tag} from 'antd';
import {Chart} from "./Charts"
// import type { SearchProps } from '../';

const  Opportunityoverview =() => {
    const { Search } = Input;
    const columns = [
        {
          title: 'Opportunity Name',
          dataIndex: 'opportunityname',
          key: 'opportunityname',
        //   render: (text1) => <a>{text1}</a>,
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
        },
        {
          title: 'Applied',
          dataIndex: 'applied',
          key: 'applied',
        },
        {
          title: 'Recommended',
          key: 'recommended',
          dataIndex: 'recommended',
        //   render: (_, { tags }) => (
        //     <>
        //       {tags.map((tag) => {
        //         let color = tag.length > 5 ? 'geekblue' : 'green';
        //         if (tag === 'loser') {
        //           color = 'volcano';
        //         }
        //         return (
        //           <Tag color={color} key={tag}>
        //             {tag.toUpperCase()}
        //           </Tag>
        //         );
        //       })}
        //     </>
        //   ),
        },
        {
          title: 'Interview',
          key: 'interview',
          dataIndex: 'interview',

        //   render: (_, record) => (
        //     <Space size="middle">
        //       <a>Invite {record.name}</a>
        //       <a>Delete</a>
        //     </Space>
        //   ),
        },
        {
            title: 'Offer',
            key : 'offer',
          dataIndex: 'offer',

        },{
            title: 'Hired',
            key : 'hired',
          dataIndex: 'hired',
        }
      ];
      const data = [
        {
          key: '1',
          opportunityname: 'John Brown',
          status: 32,
          applied: 'New York No. 1 Lake Park',
          recomended: ['nice', 'developer'],
          interview: "hhh",
          offer:'',
          hired:'jjj',
        },
        {
            key: '1',
            opportunityname: 'John Brown',
            status: 32,
            applied: 'New York No. 1 Lake Park',
            recomended: ['nice', 'developer'],
            interview: "hhh",
            offer:'',
            hired:'jjj',
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sydney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ];

  return (
    <div >
<div className="flex-row w-full flex mb-10">
  <div className="w-1/2">
    <p className="text-blue text-xl font-bold">Opportunity Overview</p>
  </div>
  <div className="flex w-1/2 justify-between gap-4">
   
    <div className="flex gap-4 flex-col items-end w-full">
      
      <div className="ant-space-compact css-pr0fja ant-space-compact-block ant-dropdown-button css-pr0fja">
        <button
          type="button"
          className="ant-btn css-pr0fja ant-btn-default ant-btn-lg ant-btn-compact-item ant-btn-compact-first-item"
        >
          <span>London Internship Program</span>
        </button>
        <DownOutlined />
      </div>
    </div>
  </div>
</div>
{/* <div className="container m-auto grid grid-cols-3 grid-rows-5 md:grid-cols-5 lg:grid-cols-8 gap-4">
      <div className="tile bg-teal-500 col-span-full">
        <h1 className="tile-marker">ONE</h1>
      </div>
      <div className="tile bg-amber-500 row-start-2 row-end-5 col-span-1 md:col-span-2 lg:col-span-3">
        <h1 className="tile-marker">TWO</h1>
      </div>
      <div className="tile bg-yellow-500 row-start-4 row-end-5 md:row-start-2 md:row-end-3 col-span-2 md:col-span-3 lg:col-span-5">
        <h1 className="tile-marker">THREE</h1>
      </div>
      <div className="tile bg-lime-600 lg:col-start-4 lg:col-span-3">
        <h1 className="tile-marker">FOUR</h1>
      </div>
      <div className="tile bg-green-600">
        <h1 className="tile-marker">FIVE</h1>
      </div>
      <div className="tile bg-emerald-500">
        <h1 className="tile-marker">SIX</h1>
      </div>
      <div className="tile bg-teal-500">
        <h1 className="tile-marker">SEVEN</h1>
      </div>
      <div className="tile bg-purple-500">
        <h1 className="tile-marker">EIGHT</h1>
      </div>
      <div className="tile bg-pink-500 row-start-5 md:col-span-full">
        <h1 className="tile-marker">NINE</h1>
      </div>
    </div> */}

<div className="main-report grid gap-8 ">
<div className="grid lg:col-start-1 lg:col-span-1">
    <div className="bg-white rounded-3xl border-solid border py-6">
        <div className="flex items-center justify-between pb-5 px-8">
            <span className="font-bold">
                Applied
            </span>
        </div>
        <div className="flex items-center justify-between pb-5 px-8">
            <span className="font-bold">
                3,122
            </span>
        </div>
        <div className="flex items-center justify-between pb-4  px-8">
            <span className="">
                Previous Period
            </span>
        </div>
        <div className="flex items-center justify-between  px-8">
            <span className="">
               1592
            </span>
        </div>
    </div>

</div>
<div className="grid lg:col-start-2 lg:col-span-1">
    <div className="bg-white rounded-3xl border-solid border py-6">
        <div className="flex items-center justify-between pb-5 px-8">
            <span className="font-bold">
                Applied
            </span>
        </div>
        <div className="flex items-center justify-between pb-5 px-8">
            <span className="font-bold">
                3,122
            </span>
        </div>
        <div className="flex items-center justify-between pb-4  px-8">
            <span className="">
                Previous Period
            </span>
        </div>
        <div className="flex items-center justify-between  px-8">
            <span className="">
               1592
            </span>
        </div>
    </div>

</div>  
<div className="grid lg:col-start-3 lg:col-span-1">
    <div className="bg-white rounded-3xl border-solid border py-6">
        <div className="flex items-center justify-between pb-5 px-8">
            <span className="font-bold">
                Applied
            </span>
        </div>
        <div className="flex items-center justify-between pb-5 px-8">
            <span className="font-bold">
                3,122
            </span>
        </div>
        <div className="flex items-center justify-between pb-4  px-8">
            <span className="">
                Previous Period
            </span>
        </div>
        <div className="flex items-center justify-between  px-8">
            <span className="">
               1592
            </span>
        </div>
    </div>

</div> 
<div className="grid lg:col-start-4 lg:col-span-8 row-start-1 row-end-5">
    <div className="bg-white rounded-3xl border-solid border py-6">
        <div className="flex items-center justify-between pb-5 px-8">
            <span className="font-bold">
                Applied
            </span>
        </div>
        <div className="flex items-center justify-between pb-5 px-8">
            <span className="font-bold">
                3,122
            </span>
        </div>
        <div className="flex items-center justify-between pb-4  px-8">
            <span className="">
                Previous Period
            </span>
        </div>
        <div className="flex items-center justify-between  px-8">
            <span className="">
               1592
            </span>
        </div>
    </div>

</div>  
<div className="grid row-start-2 row-end-7 col-span-1 md:col-span-2 lg:col-span-3">
    <div className="bg-white rounded-3xl border-solid border py-6">
        <div className="flex items-center justify-between pb-5 px-8">
            <span className="font-bold">
                <Chart/>
            </span>
        </div>
        <div className="flex items-center justify-between pb-5 px-8">
            <span className="font-bold">
                3,122
            </span>
        </div>
        <div className="flex items-center justify-between pb-4  px-8">
            <span className="">
                Previous Period
            </span>
        </div>
        <div className="flex items-center justify-between  px-8">
            <span className="">
               1592
            </span>
        </div>
    </div>

</div> 
<div className="grid row-start-5 row-end-7 col-span-4 md:col-span-2 lg:col-span-4">
    <div className="bg-white rounded-3xl border-solid border py-6">
        <div className="flex items-center justify-between pb-5 px-8">
            <span className="font-bold">
                Applied
            </span>
        </div>
        <div className="flex items-center justify-between pb-5 px-8">
            <span className="font-bold">
                3,122
            </span>
        </div>
        <div className="flex items-center justify-between pb-4  px-8">
            <span className="">
                Previous Period
            </span>
        </div>
        <div className="flex items-center justify-between  px-8">
            <span className="">
               1592
            </span>
        </div>
    </div>

</div> 
<div className="grid row-start-5 row-end-7 col-span-6  md:col-span-2 lg:col-span-4">
    <div className="bg-white rounded-3xl border-solid border py-6">
        <div className="flex items-center justify-between pb-5 px-8">
            <span className="font-bold">
                Applied
            </span>
        </div>
        <div className="flex items-center justify-between pb-5 px-8">
            <span className="font-bold">
                3,122
            </span>
        </div>
        <div className="flex items-center justify-between pb-4  px-8">
            <span className="">
                Previous Period
            </span>
        </div>
        <div className="flex items-center justify-between  px-8">
            <span className="">
               1592
            </span>
        </div>
    </div>

</div> 


</div>
<div className="flex-row w-full flex my-9">
  <div className="w-1/2">
    {/* <p className="text-blue text-xl font-bold">Opportunity Overview</p> */}
    <Search placeholder="input search text" style={{backgroundColor:"#1677ff"}} enterButton />
  </div>
  <div className="flex w-1/2 justify-between gap-4">
   
    <div className="flex gap-4 flex-col items-end w-full">
      
      <div className="text-blue-50 text-sm w-80 bg-white ant-space-compact css-pr0fja ant-space-compact-block ant-dropdown-button css-pr0fja">
      
      <button className="text-sm w-80 bg-transparent bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
      Export All As CSV
</button>
      </div>
    </div>
  </div>
</div>
<div className="grid bg-white bg-white rounded-3xl border-solid border py-6 px-8">
    <div className="grid gap-x-9">
<div className="grid lg:col-start-1 lg:col-span-1 h-5/6">
    <div className="bg-white rounded-3xl border-solid border py-6">
        <div className="flex items-center justify-center pb-5 px-8">
            <span>
                Applied
            </span>
        </div>
        <div className="flex items-center justify-center  px-8">
            <span className="font-bold">
                3,122
            </span>
        </div>
        
       
    </div>

</div>
<div className="grid lg:col-start-2 lg:col-span-1 h-5/6">
    <div className="bg-white rounded-3xl border-solid border py-6">
        <div className="flex items-center justify-center pb-5 px-8">
            <span>
                Applied
            </span>
        </div>
        <div className="flex items-center justify-center px-8">
            <span className="font-bold">
                3,122
            </span>
        </div>
       
    </div>

</div>
<div className="grid lg:col-start-3 lg:col-span-1 h-5/6">
    <div className="bg-white rounded-3xl border-solid border py-6">
        <div className="flex items-center justify-center pb-5 px-8">
            <span>
                Applied
            </span>
        </div>
        <div className="flex items-center justify-center px-8">
            <span className="font-bold">
                3,122
            </span>
        </div>
        
    </div>

</div>
<div className="grid lg:col-start-4 lg:col-span-1 h-5/6">
    <div className="bg-white rounded-3xl border-solid border py-6">
        <div className="flex items-center justify-center pb-5 px-8">
            <span>
                Applied
            </span>
        </div>
        <div className="flex items-center justify-center px-8">
            <span className="font-bold">
                3,122
            </span>
        </div>
       
    </div>

</div>
<div className="grid lg:col-start-5 lg:col-span-1 h-5/6">
    <div className="bg-white rounded-3xl border-solid border py-6">
        <div className="flex items-center justify-center pb-5 px-8">
            <span>
                Applied
            </span>
        </div>
        <div className="flex items-center justify-center  px-8">
            <span className="font-bold">
                3,122
            </span>
        </div>
        
    </div>

</div>
<div className="grid lg:col-start-6 lg:col-span-1 h-5/6">
    <div className="bg-white rounded-3xl border-solid border py-6">
        <div className="flex items-center justify-center pb-5 px-8">
            <span>
                Applied
            </span>
        </div>
        <div className="flex items-center justify-center px-8">
            <span className="font-bold">
                3,122
            </span>
        </div>
       
    </div>

</div>
</div>
<div className="my-9"> 
<Table columns={columns} dataSource={data} />
</div>
</div>  
    </div>
  );
}

export default Opportunityoverview;
