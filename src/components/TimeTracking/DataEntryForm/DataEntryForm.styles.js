import styled from 'styled-components';
import * as Yup from 'yup';

const onlynums = (value) => /^\d+$/.test(value)



export const ValidationSchema = Yup.object().shape({
  firstNameLogin: Yup.string()
    .required("Required")
    .min(2, 'Minimum of two characters required', 'Minimum of two characters required')
    .max(10, 'Maximum name length of 10', 'Max length of 10'),
  lastNameLogin: Yup.string()
    .required("Required")
    .min(2, 'Minimum of two characters required', 'Minimum of two characters required')
    .max(10, 'Maximum name length of 10', 'Maximum name length of 10'),
  project1Hours: Yup.string()
  .test('Must be a number', 'Must be a number', onlynums)
    .required("Required"),
  project2Hours: Yup.string()
  .test('Must be a number', 'Must be a number', onlynums)
    .required("Required"),
  project3Hours: Yup.string()
  .test('Must be a number', 'Must be a number', onlynums)
    .required("Required"),
  project1Name: Yup.string()
    .required("Required"),
  project2Name: Yup.string()
    .required("Required"),
  project3Name: Yup.string()
    .required("Required"),
})

/*

  project1Hours: Yup.number()
  .test('Must be a number', 'Must be a number', onlynums)
    .required("Required"),
*/




export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-image: url(${process.env.CARVANA_APP_ASSETS_BASE_URL}/dotcom-assets/homepage-only/hp-banner.jpg);
`;

export const StackedBackground = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const ExampleLabel = styled.p`
  margin: 15px 0;
  font-weight: 1000;
  color: rgba(0, 0, 0, 0.75);
`;


export const FormWrapper = styled.div`
flex: 0 0 100%;
background: rgba(244, 248, 250, 0.9);
padding: 15px 0;
`;

export const FormHeader = styled.div`
text-align:center;
line-height:56px;
color: black;
font-weight:500;
font-size: 23px;
`;


export const UserChange = styled.div`
text-align:center;
margin-top:10px;
color: #122946;
font-weight:400;
font-size: 15px;
`;

export const ReHeader = styled.div`
text-align:center;
line-height:56px;
color: gray;
font-weight:500;
font-size: 14px;
`;