import React, { useState, useEffect } from "react";
import Photo from "./Photo";
import axios from "axios";
import {
  Grid,
  Form,
  Input,
  TextArea,
  Button,
  Select,
  Container,
  Divider
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const genderOptions = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" }
];

const PhotoList = () => {
  const [nasa, setNasa] = useState({});
  console.log("nasa", nasa);

  const fetchApod = () => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=zgYYmlEFly5eugxnKgtov0khEFcvpLbWw7s2Jitv&date=2012-03-14`
      )
      .then(response => {
        console.log("fetchApod response.data", response.data);
        setNasa(response.data);
      })
      .catch(error => {
        console.log("fetchApod error", error);
      });
  };

  useEffect(() => {
    fetchApod();
  }, []);

  return (
    <div>
      <Grid
        textAlign="center"
        style={{
          height: "100vh",
          width: "80%",
          margin: "0 auto",
          marginTop: "40px"
        }}
        verticalAlign="middle"
      >
        <Container>
          <h2>Nasa APOD</h2>
          {/* <Photo /> */}
          <img src={nasa.url} alt="NASA APOD" />
          <Divider />
          <div>{nasa.explanation}</div>
        </Container>
        <Divider />

        <Form>
          <Form.Group widths="equal">
            <Form.Field
              id="form-input-control-first-name"
              control={Input}
              label="First name"
              placeholder="First name"
            />
            <Form.Field
              id="form-input-control-last-name"
              control={Input}
              label="Last name"
              placeholder="Last name"
            />
            <Form.Field
              control={Select}
              options={genderOptions}
              label={{
                children: "Gender",
                htmlFor: "form-select-control-gender"
              }}
              placeholder="Gender"
              search
              searchInput={{ id: "form-select-control-gender" }}
            />
          </Form.Group>
          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            label="Opinion"
            placeholder="Opinion"
          />
          <Form.Field
            id="form-button-control-public"
            control={Button}
            content="Confirm"
            label="Label with htmlFor"
          />
        </Form>
      </Grid>
    </div>
  );
};

export default PhotoList;
