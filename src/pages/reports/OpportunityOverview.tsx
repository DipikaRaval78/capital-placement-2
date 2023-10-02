import React from 'react';
import {DownOutlined} from  "@ant-design/icons"
import {Chart} from "./Charts"
import { Icon } from '@iconify/react';
import {TotalCandidateTable} from "./TotalCandidateTable";
import {Opportunitytable} from "./OpportunityTable";

const  Opportunityoverview =() => {

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

<div className="main-report grid gap-8 container m-auto grid grid-cols-3 grid-rows-3 md:grid-cols-5 lg:grid-cols-4 gap-4">
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
            <span>
                Previous Period
            </span>
        </div>
        <div className="flex items-center px-8">
            <span className="text-base pr-2.5">
               1592
            </span>
            <div className="flex items-center rounded-lg px-2" style={{backgroundColor:"rgba(240, 246, 255, 1)"}}>
            <span className="">
            <Icon className="text-xl " icon="ant-design:rise-outlined"/>
            
            </span>
            <div className="text-sm pl-1 items-center">15%</div>
            </div>
        </div>
    </div>

</div>
<div className="grid lg:col-start-2 lg:col-span-1">
    <div className="bg-white rounded-3xl border-solid border py-6">
        <div className="flex items-center justify-between pb-5 px-8">
            <span className="font-bold">
                Offer
            </span>
        </div>
        <div className="flex items-center justify-between pb-5 px-8">
            <span className="font-bold">
                183
            </span>
        </div>
        <div className="flex items-center justify-between pb-4  px-8">
            <span className="">
                Previous Period
            </span>
        </div>
        <div className="flex items-center px-8">
            <span className="text-base pr-2.5">
               71
            </span>
            <div className="flex items-center rounded-lg px-2" style={{backgroundColor:"rgba(240, 246, 255, 1)"}}>
            <span className="">
            <Icon className="text-xl " icon="ant-design:rise-outlined"/>
            
            </span>
            <div className="text-sm pl-1 items-center">15%</div>
            </div>
        </div>
    </div>

</div>  
<div className="grid lg:col-start-3 lg:col-span-1">
    <div className="bg-white rounded-3xl border-solid border py-6">
        <div className="flex items-center justify-between pb-5 px-8">
            <span className="font-bold">
                Hired
            </span>
        </div>
        <div className="flex items-center justify-between pb-5 px-8">
            <span className="font-bold">
                98
            </span>
        </div>
        <div className="flex items-center justify-between pb-4  px-8">
            <span className="">
                Previous Period
            </span>
        </div>
        <div className="flex items-center px-8">
            <span className="text-base pr-2.5">
               167
            </span>
            <div className="flex items-center rounded-lg px-2" style={{backgroundColor:"rgba(255, 243, 240, 1)"}}>
            <span className="">
            <Icon className="text-xl " icon="ant-design:fall-outlined"/>
            
            </span>
            <div className="text-sm pl-1 items-center">15%</div>
            </div>
        </div>
    </div>

</div> 
<div className="grid lg:col-start-4 lg:col-span-6 row-start-1 row-end-3">
    <div className="bg-white rounded-3xl border-solid border py-6">
        <div className="flex items-center justify-between pb-5 px-8">
            <span className="font-bold">
                Total Candidate Flow
            </span>
        </div>
        <div className="flex items-center justify-between pb-5 px-8">
            <span className="font-bold">
                4567
            </span>
        </div>
        <div className="flex items-center justify-between pb-4  px-8">
            <span className="">
                Previous Period
            </span>
        </div>
        <div className="flex items-center justify-between  px-8">
           <TotalCandidateTable/> 
        </div>
    </div>

</div>  
<div className="grid row-start-2 row-end-4 col-span-1 md:col-span-2 lg:col-span-3">
    <div className="bg-white rounded-3xl border-solid border py-6">
        <div className="flex items-center justify-between pb-5 px-8">
            <span className="font-bold">
            <button
          type="button"
          className="ant-btn css-pr0fja ant-btn-default ant-btn-lg ant-btn-compact-item ant-btn-compact-first-item"
        >
          <span>Recommended</span>
        </button>
        <DownOutlined />
            </span>
        </div>
        <div className="flex items-center justify-between pb-5 px-8">
            
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
<div className="grid row-start-3 row-end-4 col-span-2 md:col-span-2  lg:col-span-2">
    <div className="bg-white rounded-3xl border-solid border py-6">
        <div className="flex items-center justify-between pb-5 px-8">
            <span className="font-bold">
                Recommended
            </span>
            <div className="flex items-center justify-between">
            <span className="font-bold">
                3,122
            </span>
        </div>
        </div>
       
        <div className="flex items-center justify-between pb-16 px-8">
            <span className="">
                Previous Period
            </span>
        </div>
        <div className="flex items-center px-8">
        <span>93</span>
  
        <div className="flex items-center rounded-lg px-2" style={{backgroundColor:"rgba(240, 246, 255, 1)"}}>
            <span className="">
            <Icon className="text-xl " icon="ant-design:rise-outlined"/>
            
            </span>
            <div className="text-sm pl-1 items-center">15%</div>
            </div>
        </div>
    </div>

</div> 
<div className="grid row-start-3 row-end-4 col-span-2  md:col-span-2  lg:col-span-2">
    <div className="bg-white rounded-3xl border-solid border py-6">
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

</div> 


</div>

 <Opportunitytable/>
    </div>
  );
}

export default Opportunityoverview;
