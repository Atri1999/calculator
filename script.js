const operations=document.querySelectorAll('.operation')
const operators=document.querySelectorAll('.operator')
const previous=document.querySelector('.previous')
const present=document.querySelector('.present')
const allclr= document.querySelector('.clear')
const result=document.querySelector('.result')
const del=document.querySelector('.delete')

class calculator
{
    constructor(){
        this.presentNumber="";
        this.previousNumber="";
        this.operation='';
    }
    
    click_op(op){
        if (this.presentNumber=='')
        {
            this.operation=op
            return
        }

        if (this.previousNumber==''){
            this.previousNumber=this.presentNumber;
            this.operation=op
        }
        else{
            this.previousNumber=this.compute()
            this.operation=op
        }
        this.presentNumber='';

    }

    delete(){
        if (this.presentNumber!=''){
            this.presentNumber=this.presentNumber.slice(0,-1)
        }
    }

    result(){
        if (this.operation!='' && this.presentNumber!='' && this.previousNumber!=''){
            this.presentNumber=this.compute().toFixed(2)
            this.previousNumber=''
            this.operation=''
        } 
        else{
            return
        }

    }

    clear(){
        this.previousNumber=''
        this.presentNumber=''
        this.operation=''
    }

    compute(){
        if (this.operation=='+'){
            return parseFloat(this.presentNumber)+parseFloat(this.previousNumber)
        }
        if (this.operation=='-'){
            return parseFloat(this.previousNumber)-parseFloat(this.presentNumber)
        }
        if (this.operation=='*'){
            return parseFloat(this.previousNumber)*parseFloat(this.presentNumber)
        }
        if (this.operation=='/'){
            return parseFloat(this.previousNumber)/parseFloat(this.presentNumber)
        }        
    }

    append(temp){
        console.log(this.presentNumber.search("."));
        if (temp==="." && this.presentNumber.includes('.')){
            return;
        }

        this.presentNumber+=temp;
        
    }

    display(){
        if (this.operation!=''){
            previous.innerHTML=this.previousNumber+this.operation
        }else{
            previous.innerHTML=this.previousNumber
        }
        
        present.innerHTML=this.presentNumber
    }

}

let cal = new calculator()

operators.forEach(oper => {
    oper.addEventListener('click',()=>{
        let k=oper.getAttribute('data-value-type')
        cal.append(k)
        cal.display()
    })
    
})

operations.forEach(op =>{
    op.addEventListener('click',() => {
        let k=op.getAttribute('data-value-type')
        cal.click_op(k)
        cal.display()
    })
})

allclr.addEventListener('click',()=>{
    cal.clear()
    cal.display()
})

result.addEventListener('click',()=>{
    cal.result()
    cal.display()
})

del.addEventListener('click',()=>{
    cal.delete()
    cal.display()
})