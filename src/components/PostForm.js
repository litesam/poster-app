import React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import Remarkable from 'react-remarkable'
import moment from 'moment'

const styles = {
  formatedText: {
    wordBreak: 'break-all',
    maxWidth: '200px'
  }
}

const PostForm = ({
  values,
  handleChange,
  errors,
  touched
}) => (
  <div>
    <Form>
      <div>
        { touched.note && errors.note && <p>{errors.note}</p> }
        <Field
          type="text"
          name="note"
          placeholder="note" 
          autoFocus
        />
      </div>
      <div>
        { touched.description && errors.description && <p>{errors.description}</p> }
        <textarea
          placeholder="Add your 2 cents (description)"
          name="description"
          value={values.description}
          onChange={handleChange}
          maxLength="1024"
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </Form>
    <h1>{values.note}</h1>
    <div style={styles.formatedText}>
      <Remarkable source={values.description} />
    </div>
  </div>
)

export default withFormik({
  mapPropsToValues({ note, description, createdAt }) {
    return {
      note: note || '',
      description: description || '',
      createdAt: moment(createdAt) || moment()
    }
  },
  validationSchema: Yup.object().shape({
    note: Yup.string().trim().min(6).required(),
    description: Yup.string().max(1024).required('Description is a required field')
  }),
  handleSubmit(values, { props }) {
    const createdAt = values.createdAt.valueOf()
    props.onSubmit({
      ...values,
      createdAt
    })
  }
})(PostForm)