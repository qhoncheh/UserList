import { InfiniteScroll } from "./_partial/page/components/InfiniteScroll";

export default function UserList() {
  return <InfiniteScroll url="https://randomuser.me/api/" ItemPerPage={10} />;
}
