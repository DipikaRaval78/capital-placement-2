import { Space, Table, Tag, Select} from 'antd';
import { Icon } from '@iconify/react';
import { Input} from 'antd';


const  Oname = ["Google","Microsoft"];
const sortBy = [
    { value: "Applied", label: "Applied", },
    { value: "Recommended", label: "Recommended", },
    { value: "Interview",label: "Interview", },
    { value: "Offer", label: "Offer", },
    { value: "Hired", label: "Hired", },
    { value: "Rejected",label: "Rejected", },
 
  ];
  const handleChange = () => {
    // console.log(`selected ${value}`);
  };
const columns = [
  {
    title: 'Opportunity Name',
    dataIndex: 'name',
    key: 'name',
    // render: (text) => <a>{text}</a>,
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
    // render: (_, { tags }) => (
    //   <>
    //     {tags.map((tag) => {
    //       let color = tag.length > 5 ? 'geekblue' : 'green';
    //       if (tag === 'loser') {
    //         color = 'volcano';
    //       }
    //       return (
    //         <Tag color={color} key={tag}>
    //           {tag.toUpperCase()}
    //         </Tag>
    //       );
    //     })}
    //   </>
    // ),
  },
  {
    title: 'Interview',
    key: 'interview',
    dataIndex: 'interview',

    // render: (_, record) => (
    //   <Space size="middle">
    //     <a>Invite {record.name}</a>
    //     <a>Delete</a>
    //   </Space>
    // ),
  },
  {
    title: 'Offer',
    key: 'offer',
    dataIndex: 'offer',

    // render: (_, record) => (
    //   <Space size="middle">
    //     <a>Invite {record.name}</a>
    //     <a>Delete</a>
    //   </Space>
    // ),
  },
  {
    title: 'Hired',
    key: 'hired',
    dataIndex: 'hired',

    // render: (_, record) => (
    //   <Space size="middle">
    //     <a>Invite {record.name}</a>
    //     <a>Delete</a>
    //   </Space>
    // ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    status: 32,
    applied: 'New York No. 1 Lake Park',
    recommended: ['nice', 'developer'],
    interview: 'New York No. 1 Lake Park',
    offer: 'New York No. 1 Lake Park',
    hired: 'New York No. 1 Lake Park',
  },
  {
    key: '1',
    name: 'John Brown',
    status: 32,
    applied: 'New York No. 1 Lake Park',
    recommended: ['nice', 'developer'],
    interview: 'New York No. 1 Lake Park',
    offer: 'New York No. 1 Lake Park',
    hired: 'New York No. 1 Lake Park',
  },
  {
    key: '1',
    name: 'John Brown',
    status: 32,
    applied: 'New York No. 1 Lake Park',
    recommended: ['nice', 'developer'],
    interview: 'New York No. 1 Lake Park',
    offer: 'New York No. 1 Lake Park',
    hired: 'New York No. 1 Lake Park',
  },
  {
    key: '1',
    name: 'John Brown',
    status: 32,
    applied: 'New York No. 1 Lake Park',
    recommended: ['nice', 'developer'],
    interview: 'New York No. 1 Lake Park',
    offer: 'New York No. 1 Lake Park',
    hired: 'New York No. 1 Lake Park',
  },
];
export  const Opportunitytable = () =>{
    const { Search } = Input;

    return(
        
        <div>
             <div className="mt-6">
    <p className="text-blue text-xl font-bold">Detailed Opportunity Overview</p>
    </div>
<div className="flex-row w-full flex mt-6 mb-9 md:col-span-full">
  <div className="w-7/12">
    <Search placeholder="input search text" style={{backgroundColor:"#1677ff",borderRadius: "6px",height:"38px"}} enterButton />
  </div>
  <div className="flex  justify-between gap-4">
    <div className="pl-8">
    <Select
      defaultValue="Sort by"
      style={{
        width: 202,
        height:38,
      }}
      onChange={handleChange}
      options={sortBy}
    />

    </div>
  
    
    <div className="flex gap-4 flex-col items-end w-full">
      
      <div className="text-blue-50 text-sm w-80 bg-white ant-space-compact css-pr0fja ant-space-compact-block ant-dropdown-button css-pr0fja">
      
      <button className="text-sm w-80 bg-transparent bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
      Export All As CSV
</button>
      </div>
    </div>
  </div>
</div>
            {
                Oname.map(item => {
                    return <div className="grid bg-white bg-white rounded-3xl border-solid border py-6 mb-12 px-8">
                    <div className="flex-row w-full flex mb-10">
                      <div className="w-1/2">
                       
                        <p className="text-blue text-xl font-bold"> {item}</p>
                      </div>
                      <div className="flex w-1/2 justify-end gap-4">
                       
                        <div className="flex gap-4 flex-col items-end ">
                          
                          <div className="bg-white bg-white rounded-lg border-solid border py-1.5 px-1.5">
                                <Icon className="text-2xl" icon="ant-design:pie-chart-outlined"/>
                                    
                                </div>
                          
                        </div>
                        <div className="flex gap-4 flex-col items-end ">
                          
                        
                                <div className="bg-white bg-white rounded-lg border-solid border py-1.5 px-1.5">
                                <Icon className="text-2xl" icon="ant-design:download-outlined"/>
                                    
                                </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pb-5">
                                <span className="font-bold">
                                   
                                </span>
                               
                            </div>
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
                                  95s
                                </span>
                            </div>
                            
                           
                        </div>
                    
                    </div>
                    <div className="grid lg:col-start-2 lg:col-span-1 h-5/6">
                        <div className="bg-white rounded-3xl border-solid border py-6">
                            <div className="flex items-center justify-center pb-5 px-8">
                                <span>
                                    Recommended
                                </span>
                            </div>
                            <div className="flex items-center justify-center px-8">
                                <span className="font-bold">
                                  57
                                </span>
                            </div>
                           
                        </div>
                    
                    </div>
                    <div className="grid lg:col-start-3 lg:col-span-1 h-5/6">
                        <div className="bg-white rounded-3xl border-solid border py-6">
                            <div className="flex items-center justify-center pb-5 px-8">
                                <span>
                                    Interview
                                </span>
                            </div>
                            <div className="flex items-center justify-center px-8">
                                <span className="font-bold">
                                  39
                                </span>
                            </div>
                            
                        </div>
                    
                    </div>
                    <div className="grid lg:col-start-4 lg:col-span-1 h-5/6">
                        <div className="bg-white rounded-3xl border-solid border py-6">
                            <div className="flex items-center justify-center pb-5 px-8">
                                <span>
                                    Offer
                                </span>
                            </div>
                            <div className="flex items-center justify-center px-8">
                                <span className="font-bold">
                                    33
                                </span>
                            </div>
                           
                        </div>
                    
                    </div>
                    <div className="grid lg:col-start-5 lg:col-span-1 h-5/6">
                        <div className="bg-white rounded-3xl border-solid border py-6">
                            <div className="flex items-center justify-center pb-5 px-8">
                                <span>
                                    Hired
                                </span>
                            </div>
                            <div className="flex items-center justify-center  px-8">
                                <span className="font-bold">
                                    15
                                </span>
                            </div>
                            
                        </div>
                    
                    </div>
                    <div className="grid lg:col-start-6 lg:col-span-1 h-5/6">
                        <div className="bg-white rounded-3xl border-solid border py-6">
                            <div className="flex items-center justify-center pb-5 px-8">
                                <span>
                                    Total Rejected
                                </span>
                            </div>
                            <div className="flex items-center justify-center px-8">
                                <span className="font-bold">
                                   60
                                </span>
                            </div>
                           
                        </div>
                    
                    </div>
                    </div>
                    <div className="my-9"> 
                    <Table columns={columns} dataSource={data} />
                    </div>
                    </div> 
                    
                })
            }
        </div>
        )
}


