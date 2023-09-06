interface ILoadMore {
  showMore: boolean;
  handleLoadMore: () => void;
}
export default function LoadMore({ showMore, handleLoadMore }: ILoadMore) {
  if (!showMore) {
    return null;
  }
  return <button onClick={handleLoadMore}>Load More</button>;
}
