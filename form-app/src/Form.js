import React, {Component}  from "react";
import "./Form.css"
class Form extends Component{
    handleSubmit = e => {
        e.preventDefault();
    };
    render(){
        let deletesuccessfullyMassage = (paragraph)=>{
            paragraph.display = "none"
        }
        let successfully = ()=>{
            let paragraph = document.querySelector(".massage").style
            if(document.querySelector(".firstname").value !== "" && document.querySelector(".lastname").value !== ""){
                paragraph.display = "block"
                setTimeout(() => {
                    deletesuccessfullyMassage(paragraph)
                }, 3000);
            }
        }
        return(
            <form className="Form" onSubmit={this.handleSubmit} onChange={this.handleChange}>
                <label>
                    <input className="firstname" type="text" placeholder="Ad" required/>
                </label>
                <label>
                    <input className="lastname" type="text" placeholder="Soyad" required/>
                </label>
                <label>
                    <input type="telephone" placeholder="Telefon"/>
                </label>
                <label>
                    <textarea type="text" placeholder="Şərh - maximum 250 simvol" maxLength={250}></textarea>
                </label>
                <label>
                    <input type="submit" className="submit" onClick={successfully}/>
                </label>
                <p className="massage">Müvəffəqiyyətlə göndərildi</p>
            </form>
        )
    }
}
export default Form