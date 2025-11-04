function findImageUrl(title) {
  const formattedTitle = title.toLowerCase().replace(/\s+/g, '-');
  return `https://picsum.photos/seed/${formattedTitle}/200/300`;
}
export default findImageUrl;