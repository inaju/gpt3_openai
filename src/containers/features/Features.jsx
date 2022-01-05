import React from 'react'
import './features.css';
import { Feature } from '../../components';



const featuresData=[
    {
        'title':'Improving and distrusts instantly',
        'text':'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur officia minima distinctio nihil alias aliquid in dolorem, asperiores ut, temporibus sed unde quae cupiditate deserunt.'
    },
    {
        'title':'Become the Tended Active',
        'text':'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur officia minima distinctio nihil alias aliquid in dolorem, asperiores ut, temporibus sed unde quae cupiditate deserunt.'
    },
    {
        'title':'Message or am nothing',
        'text':'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur officia minima distinctio nihil alias aliquid in dolorem, asperiores ut, temporibus sed unde quae cupiditate deserunt.'
    },
    {
        'title':'Really bow law country',
        'text':'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur officia minima distinctio nihil alias aliquid in dolorem, asperiores ut, temporibus sed unde quae cupiditate deserunt.'
    }
]
const Features = () => {

    
    return (

        <div className="gpt3__features section__padding" id="features">
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">
                    The Future is Now and you just need to Realize it. Step into the futire today & make it happen
                </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, officiis.</p>

            </div>

            <div className="gpt3__features-container">
                {featuresData.map((item, index)=>(
                    
                    <Feature title={item.title}  text={item.text} key={item.title + index}/>
                ))}

            
            </div>
        </div>
    )
}

export default Features
