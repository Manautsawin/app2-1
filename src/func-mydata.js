import React from 'react'

export function MyAbout(){
    return (
        <div style={{textAlign:'center',color:'navy'}}>
            <br/> <br/> <a>ข้อมูลส่วนตัว</a><br/><br/>  
        </div> 
    )
}
export function Mylmage(){
    return (
        <div style={{textAlign:'center'}}>
            <img src="./images/p.jpg" width="20%"/>
            <br/><br/> 
        </div>
    )
}
export function MyData (){
    return (
        <div style={{textAlign:'center'}}>
            <a >ชื่อ-นามสกุล : มนัสวิน เกตุแก้ว</a><br/> 
            <a >เลขที่ : 18</a><br/>
            <a >ห้อง : DT26521N</a><br/>
            <a >วันเกิด : 20/08/2545</a><br/>
            <a >เบอร์โทร : 0950417221</a><br/>
            <a >คณะ : บริหารธุรกิจและเทคโนโลยีสารสนเทศ</a><br/>
            <a >สาขา : เทคโนโลยีธุรกิจดิจิทัล</a><br/>
        </div>
    )
}
    