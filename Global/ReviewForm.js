import React from "react";
import { View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";
import { globalStyles } from "../styles/Global";

const validationSchema = Yup.object().shape({
  fullname: Yup.string().required("Fullname is required"),
  age: Yup.number()
    .typeError("Age must be a number")
    .required("Age is required"),
});

const ReviewForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
    // You can perform any action with the form values here, e.g., save to a database.
  };

  return (
    <View>
      <Formik
        initialValues={{ fullname: "", age: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, handleBlur, values, errors, touched }) => (
          <View style={globalStyles.formikStyle}>
            <TextInput
              label="Fullname"
              value={values.fullname}
              onChangeText={handleChange("fullname")}
              error={touched.fullname && errors.fullname}
              onBlur={handleBlur("fullname")}
              style={globalStyles.formikText}
            />
            {touched.fullname && errors.fullname && (
              <Text style={globalStyles.error}>{errors.fullname}</Text>
            )}

            <TextInput
              label="Age"
              value={values.age.toString()} // Convert number to string for TextInput
              onChangeText={handleChange("age")}
              keyboardType="numeric"
              error={touched.age && errors.age}
              onBlur={handleBlur("fullname")}
              style={globalStyles.formikText}
            />
            {touched.age && errors.age && (
              <Text style={globalStyles.error}>{errors.age}</Text>
            )}

            <Button mode="contained" onPress={handleSubmit}>
              Submit
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ReviewForm;
