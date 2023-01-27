import React from 'react';
import './Body.css';
import BodyItem from './BodyItem';
import IMG1 from "../../images/img-1.jpg";
import IMG2 from "../../images/img-2.jpg";
import IMG3 from "../../images/img-3.jpg";
import IMG4 from "../../images/img-4.jpg";
import IMG5 from "../../images/img-5.jpg";
import UploadS from "../UploadSection/UploadSection";
function Body() {
  return (
    <div className='cards'>
      <h1>Learn More About Kathakali</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <BodyItem
              src={IMG1}
              text='History of Kathakali'
              label='History'
              path='/about'
            />
            <BodyItem
              src={IMG2}
              text='The Types of Kathakali Characters'
              label='Characters'
              path='/about'
            />
          </ul>
          <ul className='cards__items'>
            <BodyItem
              src={IMG3}
              text='The Acting'
              label='Acting'
              path='/about'
            />
            <BodyItem
              src={IMG4}
              text='Different Types of Kathakali Instruments'
              label='Instruments'
              path='/demo'
            />
            <BodyItem
              src={IMG5}
              text='Different Types of Kathakali Hand Gestures'
              label='Hand Gestures'
              path='/demo'
            />
          </ul>
          <UploadS/>
        </div>
      </div>
    </div>
  );
}

export default Body;
