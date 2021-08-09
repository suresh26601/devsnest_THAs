import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allActionsArr } from "../Actions";
import { rootReducerType } from "../Reducers/index";
export const Item = () => {
  let { id } = useParams<{ id: string | never }>();
  const { dataGallary, itemData } = useSelector(
    (state: rootReducerType) => state.ISR
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const itemDataFind = dataGallary.find((item) => {
      return item.id === Number(id);
    });
    dispatch(allActionsArr.itemDataSet(itemDataFind));
  }, []);
  if (itemData[0]) {
    return (
      <section className="item">
          <figure>
            <img src={itemData[0].img} alt="" />
          </figure>
          <aside>
              <h1>{itemData[0].title}</h1>
        <h4>{itemData[0].price}</h4>
        <h6>{itemData[0].desc}</h6>
        <button><a href="http://localhost:3000">Go Back</a></button>
          </aside>
        
      </section>
    );
  }
  return (
    <>
      <h3>loading...</h3>
    </>
  );
};
