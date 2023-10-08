import React ,{useState} from 'react';
import {DownOutlined} from  "@ant-design/icons"
import {Chart} from "./Charts"
import { Icon } from '@iconify/react';
import {TotalCandidateTable} from "./TotalCandidateTable";
import {Opportunitytable} from "./OpportunityTable";
import { Progress, Tooltip, Space,DatePickerProps,DatePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';


dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const weekFormat = 'MM/DD';
const monthFormat = 'YYYY/MM';

/** Manually entering any of the following formats will perform date parsing */
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];

const  Opportunityoverview =() => {
  const [percent, setPercent] = useState(100)
  return (
    <div >
<div className="flex-row w-full flex mb-8">
  <div className="w-1/2">
    <p className="font-semibold text-xl text-blue-700">Opportunity Overview</p>
  </div>
  <div className="flex w-1/2 justify-between gap-4">
   
    <div className="flex gap-4 flex-col items-end w-full">
      
      <div className="text-sm font-semibold " >
        <button style={{backgroundColor:"#f0f3fb"}}
          type="button"
          className=" p-2.5 rounded-xl ant-btn css-pr0fja ant-btn-default ant-btn-lg ant-btn-compact-item ant-btn-compact-first-item"
        >
          <span>London Internship Program</span>
         
        <DownOutlined className='text-sm font-semibold pl-1'/>
        </button>
        <span> <RangePicker className='p-2.5 rounded-xl' style={{backgroundColor:"#f0f3fb"}}
      defaultValue={[dayjs('2015/01/01', dateFormat), dayjs('2015/01/01', dateFormat)]}
      format={dateFormat}
    /></span>
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
    {/* <div className="container m-auto grid grid-cols-3 grid-rows-5 md:grid-cols-5 lg:grid-cols-5 gap-4">
      <div className=" col-span-full">
        <h1 className="tile-marker">ONE</h1>
      </div>
      <div className="tile bg-amber-500 row-start-1 row-end-2 col-span-1 md:col-span-2 lg:col-span-1">
        <h1 className="tile-marker">TWO</h1>
      </div>
      <div className="tile bg-amber-500 row-start-1 row-end-2 col-span-1 md:col-span-2 lg:col-span-1">
        <h1 className="tile-marker">TWO</h1>
      </div>
      <div className="tile bg-amber-500 row-start-1 row-end-2 col-span-1 md:col-span-2 lg:col-span-1">
        <h1 className="tile-marker">TWO</h1>
      </div>
      <div className="tile bg-yellow-500 row-start-1 row-end-3 md:row-start-1 md:row-end-3 col-span-2 md:col-span-3 lg:col-span-2">
        <h1 className="tile-marker">THREE</h1>
      </div>
      <div className="tile bg-lime-600 row-start-2 row-end-4 col-span-3 md:col-span-3 lg:col-span-3">
        <h1 className="tile-marker">FOUR</h1>
      </div>
      <div className="tile bg-green-600">
        <h1 className="tile-marker">FIVE</h1>
      </div>
      <div className="tile bg-emerald-500">
        <h1 className="tile-marker">SIX</h1>
      </div>
     
    </div> */}


<div className="main-report grid container m-auto  grid-cols-4  grid-cols-3 md:grid-cols-8 lg:grid-cols-5">
<div className="grid row-start-1 row-end-2 col-span-1 md:col-span-2 lg:col-span-1   h-fit h-max  h-min  relative">
    <div className="bg-white rounded-xl border-solid border py-6">
        <div className="flex items-center justify-between pb-5 px-8 text-base font-bold tracking-normal">
            <span>
                Applied
            </span>
        </div>
        <div className="flex items-center justify-between pb-5 px-8 text-xl font-medium tracking-normal ">
            <span>
                3,122
            </span>
        </div>
        <div className="flex items-center justify-between pb-4  px-8 text-xs font-normal tracking-normal " >
            <span>
                Previous Period
            </span>
        </div>
        <div className="flex items-center px-8 ">
            <span className='font-light text-xs tracking-normal  pr-2.5'>
               1592
            </span>
            <div className="flex items-center rounded-lg px-2" style={{backgroundColor:"rgba(240, 246, 255, 1)"}}>
            <span>
            <Icon className="text-base font-light tracking-normal " icon="ant-design:rise-outlined"/>
            
            </span>
            <div className="text-xs font-light pl-1 tracking-normal items-center">15%</div>
            </div>
        </div>
    </div>

</div>
<div className="grid row-start-1 row-end-2 col-span-1 md:col-span-2 lg:col-span-1 h-fit h-max  h-min  relative">
    <div className="bg-white rounded-xl border-solid border py-6">
    <div className="flex items-center justify-between pb-5 px-8 text-base font-bold tracking-normal">

            <span>
                Offer
            </span>
        </div>
        <div className="flex items-center justify-between pb-5 px-8 text-xl font-medium tracking-normal ">

            <span >
                183
            </span>
        </div>
        <div className="flex items-center justify-between pb-4  px-8 text-xs font-normal tracking-normal " >
            <span >
                Previous Period
            </span>
        </div>
        <div className="flex items-center px-8 ">
            <span className='font-light text-xs tracking-normal  pr-2.5'>
               71
            </span>
            <div className="flex items-center rounded-lg px-2" style={{backgroundColor:"rgba(240, 246, 255, 1)"}}>
            <span className="">
            <Icon className="text-base font-light tracking-normal " icon="ant-design:rise-outlined"/>
            
            </span>
            <div className="text-xs font-light pl-1 tracking-normal items-center">15%</div>
            </div>
        </div>
    </div>

</div>  
<div className="grid row-start-1 row-end-2 col-span-1 md:col-span-2 lg:col-span-1 h-fit h-max  h-min  relative">
    <div className="bg-white rounded-xl border-solid border py-6">
    <div className="flex items-center justify-between pb-5 px-8 text-base font-bold tracking-normal">

            <span >
                Hired
            </span>
        </div>
        <div className="flex items-center justify-between pb-5 px-8 text-xl font-medium tracking-normal ">

            <span>
                98
            </span>
        </div>
        <div className="flex items-center justify-between pb-4  px-8 text-xs font-normal tracking-normal " >
            <span>
                Previous Period
            </span>
        </div>
        <div className="flex items-center px-8 ">
            <span className='font-light text-xs tracking-normal  pr-2.5'>
               167
            </span>
            <div className="flex items-center rounded-lg px-2" style={{backgroundColor:"rgba(255, 243, 240, 1)"}}>
            <span className="">
            <Icon className="text-base font-light tracking-normal" icon="ant-design:fall-outlined"/>
            
            </span>
            <div className="text-xs font-light pl-1 tracking-normal items-center">15%</div>
            </div>
        </div>
    </div>

</div> 
<div className="grid row-start-1 row-end-3 md:row-start-1 md:row-end-3 col-span-2 md:col-span-3  h-fit h-max  h-min  lg:col-span-2 relative">
    <div className="bg-white rounded-xl border-solid border py-6">
        <div className="flex items-center justify-between pb-5 px-8 text-base font-bold tracking-normal">
            <span>
                Total Candidate Flow
            </span>
        </div>
        <div className="flex items-center justify-between pb-5 px-8 text-xl font-medium tracking-normal">
            <span>
                4567
            </span>
        </div>
        <div className="flex items-center justify-between opacity-50 px-8">
            <span className="w-full">
            <Tooltip>
      <Progress  strokeColor={"Pink"}  percent={percent} success={{ percent: 80 }} />
     
    </Tooltip>
            </span>
        </div>
        <div className="flex items-center justify-between  px-8">
           <TotalCandidateTable/> 
        </div>
    </div>

</div>  
<div className="grid row-start-2 row-start-2 row-end-4 col-span-3 md:col-span-6 lg:col-span-3">
    <div className="bg-white rounded-xl border-solid border pt-6">
        <div className="flex items-center justify-between pb-4 px-8">
            <span className="text-base font-bold">
            <button
          type="button"
          className="ant-btn css-pr0fja ant-btn-default ant-btn-lg ant-btn-compact-item ant-btn-compact-first-item"
        >
          <span>Recommended</span>
        </button>
        <DownOutlined className='text-sm pl-1'/>
            </span>
        </div>
        <div className="flex items-center justify-between px-8 pb-2">
            
                <Chart/>
           
        </div>
        {/* <div className="flex items-center justify-between pb-4  px-8">
            <span className="">
                Previous Period
            </span>
        </div>
        <div className="flex items-center justify-between  px-8">
            <span className="">
               1592
            </span>
        </div> */}
    </div>

</div> 
<div className="grid">
  <div className="grid row-start-1 row-end-2 col-span-1 md:col-span-2 lg:col-span-1   h-fit h-max  h-min  relative">
    <div className="bg-white rounded-xl border-solid border py-6">
        <div className="flex items-center justify-between pb-5 px-8 text-base font-bold tracking-normal">
            <span>
                Applied
            </span>
            <div className="flex items-center justify-between text-xl font-medium tracking-normal ">
            <span>
                3,122
            </span>
        </div>  
        </div>
       
        <div className="flex items-center justify-between pb-4  px-8 text-xs font-normal tracking-normal " >
            <span>
                Previous Period
            </span>
        </div>
        <div className="flex items-center px-8 ">
            <span className='font-light text-xs tracking-normal  pr-2.5'>
               90
            </span>
            <div className="flex items-center rounded-lg px-2" style={{backgroundColor:"rgba(240, 246, 255, 1)"}}>
            <span>
            <Icon className="text-base font-light tracking-normal " icon="ant-design:rise-outlined"/>
            
            </span>
            <div className="text-xs font-light pl-1 tracking-normal items-center">15%</div>
            </div>
        </div>
    </div>

</div>

</div> 
<div className="grid">
  <div className="grid row-start-1 row-end-2 col-span-1 md:col-span-2 lg:col-span-1   h-fit h-max  h-min  relative">
    <div className="bg-white rounded-xl border-solid border py-6">
        <div className="flex items-center justify-between pb-5 px-8 text-base font-bold tracking-normal">
            <span>
            Interview
            </span>
            <div className="flex items-center justify-between text-xl font-medium tracking-normal ">
            <span>
               443
            </span>
        </div>  
        </div>
       
        <div className="flex items-center justify-between pb-4  px-8 text-xs font-normal tracking-normal " >
            <span>
                Previous Period
            </span>
        </div>
        <div className="flex items-center px-8 ">
            <span className='font-light text-xs tracking-normal  pr-2.5'>
               93
            </span>
            <div className="flex items-center rounded-lg px-2" style={{backgroundColor:"rgba(240, 246, 255, 1)"}}>
            <span>
            <Icon className="text-base font-light tracking-normal " icon="ant-design:rise-outlined"/>
            
            </span>
            <div className="text-xs font-light pl-1 tracking-normal items-center">15%</div>
            </div>
        </div>
    </div>

</div>

</div> 
{/* <div className="grid ">
    <div className="bg-white rounded-xl border-solid border py-6">
    <div className="flex items-center justify-between pb-5 px-8">
            <span className="font-bold">
                Interview
            </span>
            <div className="flex items-center justify-between">
            <span className="font-bold">
              443
            </span>
        </div>
        </div>
        <div className="flex items-center justify-between pb-16  px-8">
            <span className="">
                Previous Period
            </span>
        </div>
        <div className="flex items-center  px-8">
            <span>93</span>
        <div className="flex items-center rounded-lg px-2" style={{backgroundColor:"rgba(240, 246, 255, 1)"}}>
            <span className="">
            <Icon className="text-xl " icon="ant-design:rise-outlined"/>
            
            </span>
            <div className="text-sm pl-1 items-center">15%</div>
            </div>
        </div>
    </div>

</div>  */}


</div>

 <Opportunitytable/>
    </div>
  );
}

export default Opportunityoverview;
