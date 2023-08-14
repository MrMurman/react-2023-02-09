import React, { useReducer, useState } from "react";
import { Button } from "../Button/Button";
import { Rating } from "../Rating/Rating";
import { SIZE } from "../../constants/size";
import { type } from "@testing-library/user-event/dist/type";

const initialValue = {
  name: "",
  text: "",
  rating: 1,
};

//action
let actionExample = {
  type: "setName",
  payload: "name",
};

const reducerWithIF = (state, action) => {
  if (action.type === "setName") {
    return { ...state, name: action.payload }; //it takes previous state "...state" and changes name with new value
  }

  return state;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setName": {
      return { ...initialValue, name: action.payload }; //initialValue here, because we want to remove data form text and rating when entering new name
    }
    case "setText": {
      return { ...state, text: action.payload };
    }
    case "setRating": {
      return { ...state, rating: action.payload };
    }
    default:
      return state;
  }
};

export const NewReviewForm = ({ rating }) => {
  //   const [name, setName] = useState("");
  //   const [text, setText] = useState("");
  //   const [rating, setRating] = useState(4);
  // using several states on a form is not desirable, as it is difficult so sync them

  //   const [formValue, setFormValue] = useState(initialValue);
  // although this is also a valid way to create states, it is rather difficult to maintain

  const [formValue, dispatch] = useReducer(reducer, initialValue);

  const submit = () => {
    console.log(Object.values(formValue).join(" "));
  };

  const changeRating = (event) => {
    console.log(event.currentTarget.id);
    dispatch({ type: "setRating", payload: event.currentTarget.id });
  };

  return (
    <div>
      <div>
        <label>Name</label>
        <input
          value={formValue.name}
          onChange={(event) => {
            dispatch({ type: "setName", payload: event.target.value });
          }}
        />
      </div>
      <div>
        <label>Rating</label>
        <Rating
          size={SIZE.l}
          value={formValue.rating}
          onChange={changeRating}
          //(event) => {
          //   dispatch({ type: "setRating", payload: event.currentTarget.id });
          // }}
        />
        {/* <input
          type="number"
          value={formValue.rating} //same as before, but here we get value inside onChange
          onChange={({ target: { value } }) => {
            dispatch({ type: "setRating", payload: value });
          }}
        /> */}
      </div>
      <div>
        <label>Text</label>
        <input
          value={formValue.text}
          onChange={({ target: { value } }) => {
            dispatch({ type: "setText", payload: value });
          }}
        />
      </div>
      <Button
        onClick={submit}
        disabled={!formValue.name || !formValue.text || !formValue.rating}
      >
        Submit
      </Button>
    </div>
  );
};

{
  /* <div>
      <div>
        <label>Name</label>
        <input
          value={formValue.name}
          onChange={(event) => {
            setFormValue({ ...initialValue, name: event.target.value });
          }}
        />
      </div>
      <div>
        <label>Rating</label>
        <input
          type="number"
          value={formValue.rating}
          onChange={(event) => {
            setFormValue({ ...formValue, rating: event.target.value });
          }}
        />
      </div>
      <div>
        <label>Text</label>
        <input
          value={formValue.text}
          onChange={(event) => {
            setFormValue({ ...formValue, text: event.target.value });
          }}
        />
      </div>
      <Button
        onClick={submit}
        disabled={!formValue.name || !formValue.text || !formValue.rating}
      >
        Submit
      </Button>
    </div> */
}

//this is diff form example
