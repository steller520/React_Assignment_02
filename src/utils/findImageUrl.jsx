// This function generates a placeholder image URL based on the book title.
function findImageUrl(title) {
  const formattedTitle = title.toLowerCase().replace(/\s+/g, '-');
  return `https://picsum.photos/seed/${formattedTitle}/200/300`;
}
export default findImageUrl;