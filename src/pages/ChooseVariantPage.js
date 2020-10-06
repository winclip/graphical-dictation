import React, { useState } from "react";
import { useParams } from 'react-router-dom';

import VariantsList from "../components/VariantChoose/assets/variantsList";
import { Row } from "react-bootstrap";
import VariantItem from "../components/VariantChoose/VariantItem";
import Pagination from "../components/pagination";
import useChooseVariantRow from "../components/VariantChoose/useChooseVariantRow";

const postsPerPage = 4;

const ChooseVariantPage = () => {
  const { level } = useParams();
  const [ posts ] = useState(VariantsList[level]);

  const { currentPosts, paginate } = useChooseVariantRow({
    posts,
    postsPerPage
  });

  return (
    <Row className="justify-content-center">
      {
        currentPosts.map((variantItem) => (
          <VariantItem variantItem={variantItem} />
        ))
      }
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </Row>
  )
};

export default ChooseVariantPage;
