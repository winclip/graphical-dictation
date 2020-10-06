import React, { useCallback, useMemo, useState } from "react";

const useChooseVariantRow = ({
  posts,
  postsPerPage = 10,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = useCallback((pageNumber) => {
    setCurrentPage(pageNumber);
  },[]);

  return {
    currentPosts,
    paginate
  };
};

export default useChooseVariantRow;
