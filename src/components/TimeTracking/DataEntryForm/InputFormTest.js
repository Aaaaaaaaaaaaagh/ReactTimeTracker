import React from 'react';
import { Formik } from 'formik';
import FirstName from '@carvana/showroom-forms/Input/FirstName';
import LastName from '@carvana/showroom-forms/Input/LastName';
import Input from '@carvana/showroom-forms/Input/';
import PrimaryButton from '@carvana/showroom-forms/Button/Primary';
import { GridProvider, Container, Row, Col} from '@carvana/showroom-grid';
import { StackedBackground, FormWrapper, FormHeader, UserChange, ValidationSchema } from './DataEntryForm.styles';
import GetWorkingDaysLeftInMonth from './utils/getWorkingDaysLeftInMonth'

/*
function GetWorkingDaysLeftInMonth() {
  
  let count = 0;
  const curDate = new Date();
  const startofMonth = new Date(curDate.getFullYear(), curDate.getMonth(), 1)
  const endOfMonth = new Date(curDate.getFullYear(), curDate.getMonth()+1, 0)

  while (startofMonth <= endOfMonth) {
    const dayOfWeek = startofMonth.getDay();
    if(!((dayOfWeek === 6) || (dayOfWeek === 0)))
      count += 1;
    startofMonth.setDate(startofMonth.getDate() + 1)
  }
  return <h1>Remaining hours in month: {count * 8}</h1>;
}
*/


const InputForm = () => (
  

        <GridProvider defaultSize = "md">
            <FormWrapper>

                <Container>
                    <p> </p>
                <Formik
                validationSchema={ValidationSchema}
                initialValues={{
                    FirstNameLogin: "",
                    lastNameLogin: "",
                    project1Hours: 0,
                    project2Hours: 0,
                    project3Hours: 0,
                    project1Name: "",
                    project2Name: "",
                    project3Name: ""
                }}
                onSubmit={values => {
                    console.log(values);
                }}
                

                render={({ touched, handleChange, handleBlur, values, errors }) => (


              
            <StackedBackground>
              <UserChange>Hours in current month: {GetWorkingDaysLeftInMonth()}</UserChange>
          <FormHeader>Name</FormHeader>
          <FirstName
            id="firstName-login"
            onBlur={handleBlur}
            onChange={handleChange}
            touched={touched.firstNameLogin}
            error={errors.firstNameLogin}
            value={values.firstNameLogin}
            name="firstNameLogin"
            mode="light"
          />
          <p> </p>
          <LastName
            id="lastName-login"
            onBlur={handleBlur}
            onChange={handleChange}
            touched={touched.lastNameLogin}
            error={errors.lastNameLogin}
            value={values.lastNameLogin}
            name="lastNameLogin"
            mode="light"
          />

<GridProvider>
<Container>
  <Row>
    <Col>
    <FormHeader>Projects</FormHeader>
    </Col>
    <Col>
    <FormHeader> Hours</FormHeader>
    </Col>
  </Row>
<Row>
            <Col>
            <div align="center">
            <Input
            id="project1-Name"
            label="Project 1"
            onBlur={handleBlur}
            onChange={handleChange}
            touched={touched.project1Name}
            error={errors.project1Name}
            value={values.project1Name}
            width = {120}
            name="project1Name"
            mode="light"
          />
            </div>
            </Col>
            <Col>
            <div align="center">
            <Input
            type='number'
            id="project1-Hours"
            label="Hours"
            onBlur={handleBlur}
            onChange={handleChange}
            touched={touched.project1Hours}
            error={errors.project1Hours}
            value={values.project1Hours}
            name="project1Hours"
            mode="light"
          />
            </div>
            </Col>
          </Row>
          <p> </p>
          <Row>
            <Col>
            <div align="center">
            <Input
            id="project2-Name"
            label="Project 2"
            onBlur={handleBlur}
            onChange={handleChange}
            touched={touched.project2Name}
            error={errors.project2Name}
            value={values.project2Name}
            width = {120}
            name="project2Name"
            mode="light"
          />
            </div>
            </Col>
            <Col>
            <div align="center">
            <Input
            type='number'
            id="project2-Hours"
            label="Hours"
            onBlur={handleBlur}
            onChange={handleChange}
            touched={touched.project2Hours}
            error={errors.project2Hours}
            value={values.project2Hours}
            name="project2Hours"
            mode="light"
          />
            </div>
            </Col>
          </Row>
          <p> </p>
          <Row>
            <Col>
            <div align="center">
            <Input
            id="project3-Name"
            label="Project 3"
            onBlur={handleBlur}
            onChange={handleChange}
            touched={touched.project3Name}
            error={errors.project3Name}
            value={values.project3Name}
            name="project3Name"
            width = {120}
            mode="light"
          />
            </div>
            </Col>
            <Col>
            <div align="center">
            <Input
            type='number'
            id="project3-Hours"
            label="Hours"
            onBlur={handleBlur}
            onChange={handleChange}
            touched={touched.project3Hours}
            error={errors.project3Hours}
            value={values.project3Hours}
            name="project3Hours"
            mode="light"
          />
            </div>
            </Col>
          </Row>
</Container>
</GridProvider>
        <p> </p>
        <UserChange hidden={values.project1Hours + values.project2Hours + values.project3Hours < GetWorkingDaysLeftInMonth()}> Entered hours are over current monthly limit. </UserChange>
        <p> </p>
        <PrimaryButton type="submit" disabled={ errors.firstNameLogin || errors.lastNameLogin || errors.project1Hours || errors.project1Name || errors.project2Hours || errors.project2Name || errors.project3Hours || errors.project3Name || values.project1Hours + values.project2Hours + values.project3Hours > 184 }>Submit</PrimaryButton>
        </StackedBackground>
                )}
                />
             </Container>
            </FormWrapper>
        </GridProvider>
)




export default InputForm;