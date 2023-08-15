export function getSlices(width) {
  if (width <= 544) {
    return {
      first: 5,
      next: 1,
    };
  } else if (width <= 768) {
    return {
      first: 4 * 2,
      next: 2,
    };
  } else if (width <= 1280) {
    return {
      first: 4 * 3,
      next: 3,
    };
  } else {
    return {
      first: 4 * 4,
      next: 4,
    };
  }
}
