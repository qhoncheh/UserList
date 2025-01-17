"use client";
import React, { useEffect, useState } from "react";
import "../../styles/infinite-scroll.scss";

import { UserItem } from "../UserItem";
import { Loading } from "@/components/SpinnerLoading";

import { APIUser, APIUserResponse } from "@/core/definition/types/user-api";

interface InfiniteScrollProps {
  ItemPerPage: number;
  url: string;
}
const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  ItemPerPage,
  url,
}) => {
  const [items, setItems] = useState<APIUser[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const fetchItems = async (page: number) => {
    try {
      setLoading(true);
      const callApiUrl = url + `?results=${ItemPerPage}&page=${page}`;
      const response = await fetch(callApiUrl);
      console.log("bg 1", callApiUrl);
      const data: APIUserResponse = await response.json();

      setItems((prev) => [...prev, ...data.results]);
      setHasMore(data.info.results >= ItemPerPage);
    } catch (error) {
      console.error("Error fetching items:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100 &&
      !loading &&
      hasMore
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    fetchItems(page);
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  return (
    <div className="infinite-container">
      <h2>Infinite Scrolling Example</h2>
      <div className="infinite-container__items-holder">
        {items.map((item, index) => (
          <UserItem
            key={index}
            image={item.picture.medium}
            userInfo={item}
            flagUrl={`https://flagsapi.com/${item.nat}/flat/64.png`}
          />
        ))}
      </div>
      {loading && <Loading />}
      {!hasMore && <p>No more items to load.</p>}
    </div>
  );
};

export { InfiniteScroll };
