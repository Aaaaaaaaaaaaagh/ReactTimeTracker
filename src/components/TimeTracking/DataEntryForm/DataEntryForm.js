import React from 'react';
import { Link } from 'react-router-dom';
import {
    GridProvider,
    Container,
} from '@carvana/showroom-grid';
import {MainWrapper, FormWrapper, FormHeader} from './DataEntryForm.styles';
import InputForm from "./InputFormTest";


const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function CurrentMonth() {
  
    const monthval = new Date().getMonth();
    
    const valuein = monthNames[monthval]
     return <FormHeader>Time Tracking: {valuein}</FormHeader>;
}

const DataEntryForm = () => (   



<GridProvider defaultsize="sm">
<Container>
<MainWrapper>
<FormWrapper>

<div align="right"><Link to="/administrator">Sign-In</Link>  </div> 
<br/>
<div>
            <CurrentMonth/>
            </div>
            <div align="center">
            <InputForm/>
            </div>
            </FormWrapper>
    </MainWrapper>
</Container>
</GridProvider>
)

export default DataEntryForm;