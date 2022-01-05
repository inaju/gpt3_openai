import React from 'react'
import './possibility.css';
import possibilityImage from '../../assets/possibility.png'


const Possibility = () => {
    return (
        <div className="gpt3__possibility section__padding" id="possibility">
            <div className="gpt3__possibility-image">

                <img src={possibilityImage} alt="possibility" srcset="" />
            </div>

            <div className="gpt3__possibility-content">
                <h4>Request Early Access To Get Access</h4>
                <h1 className="gradient__text">
                    The Possibilities are beyond are imagination
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat optio, sed atque harum saepe repudiandae recusandae numquam consequatur, doloremque dolor laboriosam dolore temporibus magni cumque minus, perferendis corporis magnam commodi.
                </p>
                <h4>Request Early Access To Get Access</h4>

            </div>

        </div>
    )
}

export default Possibility
