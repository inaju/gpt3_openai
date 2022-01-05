import React from 'react'
import { Feature } from '../../components';
import './whatgpt3.css';
const WhatGPT3 = () => {
    return (
        <div className="gpt3__whatgpt3  section__margin" id="wgpt3">
            <div className="gpt3__whatgpt3-feature">
                <Feature title="What is GPT-3" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium sunt ratione perferendis ut aperiam. A, earum similique veritatis maxime illo voluptate est voluptates id debitis, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium sunt ratione perferendis ut aperiam. A, earum similique veritatis maxime illo voluptate est voluptates id debitis" />
            </div>


            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">
                    The Possibilities are beyond your imagination
                </h1>
                <p>Explore the Library</p>
            </div>

            <div className="gpt3__whatgpt3-container">
                <Feature title="Chatbots" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium sunt ratione perferendis ut aperiam. A, earum similique veritatis maxime illo voluptate est voluptates id debitis."/>
                <Feature title="Knowledgebase" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium sunt ratione perferendis ut aperiam. A, earum similique veritatis maxime illo voluptate est voluptates id debitis."/>
                
                <Feature title="Education"  text="            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium sunt ratione perferendis ut aperiam. A, earum similique veritatis maxime illo voluptate est voluptates id debitis."/>

            </div>
        </div>
    )
}

export default WhatGPT3
