import { Space, Table, Tag, Select} from 'antd';
import { Icon } from '@iconify/react';
import { Input} from 'antd';
import { data } from 'autoprefixer';


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
    dataIndex: 'opportunityname',
    key: 'opportunityname',
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
const Tdata = [
  {
    key: '1',
    opportunityname: 'UX Internship',
    data:{
      Active: {
        status: "HIIII",
        applied: '20',
        recommended: '17',
        interview: '4',
        offer: '3',
        hired: '1',
           },
      Disqualified :{
        status: 32,
        applied: '7',
        recommended: '4',
        interview: '1',
        offer: '1',
        hired: '1',
      },
      SubTotal :{
        status: 'Sub-Total',
        applied: '27',
        recommended: '21',
        interview: '5',
        offer: '4',
        hired: '2',
      }
    }
  },
  {
    key: '2',
    opportunityname: 'Art Internship',
    data:{
      Active: {
        status: 'Hellloo',
        applied: '44',
        recommended: '32',
        interview: '21',
        offer: '19',
        hired: '10',
           },
      Disqualified :{
        status: 32,
        applied: '24',
        recommended: '4',
        interview: '7',
        offer: '8',
        hired: '3',
      },
      SubTotal :{
        status: 'Sub-Total',
        applied: '68',
        recommended: '36',
        interview: '28',
        offer: '27',
        hired: '13',
      }
    }
  }
       
  

]
// const data = [
  
//   {
//     key: '1',
//     opportunityname: 'John ',
//     status: 32,
//     applied: '',
//     recommended: ' ',
//     interview: '',
//     offer: '',
//     hired: '',
//   },
//   {
//     key: '1',
//     opportunityname: 'John Brown',
//     status: 32,
//     applied: '',
//     recommended: ' ',
//     interview: '',
//     offer: '',
//     hired: '',
//   },
//   {
//     key: '1',
//     opportunityname: 'John Brown',
//     status: 32,
//     applied: '',
//     recommended: ' ',
//     interview: '',
//     offer: '',
//     hired: '',
//   },
// ];
export  const Opportunitytable = () =>{
    const { Search } = Input;

    return(
        
        <div>
             <div className="mt-6">
    <p className="text-base font-bold">Detailed Opportunity Overview</p>
    </div>
<div className="flex-row w-full flex mt-6 mb-9 md:col-span-full">
  <div style={{width:"59%"}}>
    <Search placeholder="input search text" id="Search" style={{backgroundColor:"#1677ff",borderRadius: "6px",height:"38px"}} enterButton />
  </div>
  <div className="flex  justify-between gap-8">
    <div className="pl-8">
    <Select
      defaultValue="Sort by"
      style={{
        width: 255,
        height:38,
      }}
      onChange={handleChange}
      options={sortBy}
    />

    </div>
  
    
    <div className="flex gap-4 flex-col items-end w-full">
      
      <div className="text-blue-50 text-sm  bg-white ant-space-compact css-pr0fja ant-space-compact-block ant-dropdown-button css-pr0fja">
      
      <button className="text-sm w-64 bg-transparent bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
      Export All As CSV
</button>
      </div>
    </div>
  </div>
</div>
            {
                Oname.map(item => {
                    return <div className="grid bg-white bg-white rounded-xl border-solid border py-6 mb-12 px-8">
                    <div className="flex-row w-full flex mb-8">
                      <div className="w-1/2">
                       
                        <p className="text-sm font-bold"> {item}</p>
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
                   
                        <div className="grid gap-x-9">
                    <div className="grid lg:col-start-1 lg:col-span-1 h-5/6">
                        <div className="bg-white rounded-xl border-solid border py-5">
                            <div className="flex items-center justify-center pb-2 px-8">
                                <span>
                                    Applied
                                </span>
                            </div>
                            <div className="flex items-center justify-center  px-8">
                                <span className="font-bold">
                                  95
                                </span>
                            </div>
                            
                           
                        </div>
                    
                    </div>
                    <div className="grid lg:col-start-2 lg:col-span-1 h-5/6">
                        <div className="bg-white rounded-xl border-solid border py-5">
                            <div className="flex items-center justify-center pb-2 px-8">
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
                        <div className="bg-white rounded-xl border-solid border py-5">
                            <div className="flex items-center justify-center pb-2 px-8">
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
                        <div className="bg-white rounded-xl border-solid border py-5">
                            <div className="flex items-center justify-center pb-2 px-8">
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
                        <div className="bg-white rounded-xl border-solid border py-5">
                            <div className="flex items-center justify-center pb-2 px-8">
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
                        <div className="bg-white rounded-xl border-solid border py-5">
                            <div className="flex items-center justify-center pb-2 px-8">
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
                    {/* <Table columns={columns} dataSource={data} /> */}
                          <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                            <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                              <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                <tr>
                                  <td scope="col" className="px-6 py-3">
                                    Opportunity Name
                                  </td>
                                  <td scope="col" className="px-6 py-3">
                                    <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                                      <tr>
                                      <td scope="col" className="px-6 py-3">
                                    Status
                                  </td>
                                  <td scope="col" className="px-6 py-3">
                                    Applied
                                  </td>
                                  <td scope="col" className="px-6 py-3">
                                    Recommended
                                  </td>
                                      <td scope="col" className="px-6 py-3">
                                    Interview
                                  </td>
                                  <td scope="col" className="px-6 py-3">
                                    Offer
                                  </td>
                                  <td scope="col" className="px-6 py-3">
                                    Hired
                                  </td>
                                
                                      </tr>
                                    </table>
                                  </td>
                               
                                </tr>
                              </thead>
                    {
                      Tdata.map(tabledata => {
                        return(
                              <tbody>
                                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'> 
                                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  {tabledata.opportunityname}  
                                  </th>
                                  < td className='px-6 py-4'>
                                    <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                                      <tr>
                                        <td className='px-6 py-4'>
                                        {tabledata.data.Active.status}
                                        </td>
                                        
                                        <td className='px-6 py-4'>
                                        {tabledata.data.Active.applied}
                                        </td>
                                        <td className='px-6 py-4'>
                                        {tabledata.data.Active.recommended}
                                        </td>
                                        <td className='px-6 py-4'>
                                        {tabledata.data.Active.interview}
                                        </td>
                                        <td className='px-6 py-4'>
                                        {tabledata.data.Active.offer}
                                        </td>
                                        <td className='px-6 py-4'>
                                        {tabledata.data.Active.hired}
                                        </td>
                                      </tr>
                                      <tr>
                                      <td className='px-6 py-4'>
                                        {tabledata.data.Disqualified.status}
                                        </td>
                                        <td className='px-6 py-4'>
                                        {tabledata.data.Disqualified.applied}
                                        </td>
                                        <td className='px-6 py-4'>
                                        {tabledata.data.Disqualified.recommended}
                                        </td>
                                        <td className='px-6 py-4'>
                                        {tabledata.data.Disqualified.interview}
                                        </td>
                                        <td className='px-6 py-4'>
                                        {tabledata.data.Disqualified.offer}
                                        </td>
                                        <td className='px-6 py-4'>
                                        {tabledata.data.Disqualified.hired}
                                        </td>
                                      </tr>
                                      <tr>
                                      <th className='px-6 py-4'>
                                        {tabledata.data.SubTotal.status}
                                        </th >
                                        <td className='px-6 py-4'>
                                        {tabledata.data.SubTotal.applied}
                                        </td >
                                        <td className='px-6 py-4'>
                                        {tabledata.data.SubTotal.recommended}
                                        </td>
                                        <td className='px-6 py-4'>
                                        {tabledata.data.SubTotal.interview}
                                        </td>
                                        <td className='px-6 py-4'>
                                        {tabledata.data.SubTotal.offer}
                                        </td>
                                        <td className='px-6 py-4'>
                                        {tabledata.data.SubTotal.hired}
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                                )
                              })
                            }
                            </table>
                          </div>
                      

                    </div>
                    </div> 
                    
                })
            }
        </div>
        )
}


