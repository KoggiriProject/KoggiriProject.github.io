type PhotoType = {
  src: string;
  width: number;
  height: number;
  title?: string;
  description?: string;
};

const lightBoxPhotos: PhotoType[] = [
  {
    src: "https://i.pinimg.com/474x/9e/95/dd/9e95dd0fe8fcf76b50056ee3e67433e2.jpg",
    width: 585,
    height: 415,
    title: "Room C",
    description: "This is the image description",
  },
  {
    src: "https://i.pinimg.com/474x/63/c2/e9/63c2e9f056b16f377f32d8e5576569c9.jpg",
    width: 585,
    height: 415,
    title: "Room C",
    description: "This is the image description",
  },
  {
    src: "https://i.pinimg.com/474x/b3/6b/a6/b36ba658a1c49fb7b351aa420c53cbc3.jpg",
    width: 585,
    height: 415,
    title: "Room C",
    description: "This is the image description",
  },
  {
    src: "https://i.pinimg.com/474x/14/b2/51/14b251fe7e6934c8843102184017466b.jpg",
    width: 585,
    height: 415,
    title: "Room C",
    description: "This is the image description",
  },
  {
    src: "https://i.pinimg.com/474x/e7/23/e4/e723e4653bfac6136ef8cc84a3779a8d.jpg",
    width: 585,
    height: 415,
    title: "Room C",
    description: "This is the image description",
  },
  {
    src: "https://i.pinimg.com/474x/4a/90/f5/4a90f5925c9b4d305b195baa12182c5f.jpg",
    width: 585,
    height: 415,
    title: "Room C",
    description: "This is the image description",
  },
  {
    src: "https://i.pinimg.com/474x/32/55/7f/32557f295a1ecebdee23e4aa9bc6061f.jpg",
    width: 585,
    height: 415,
    title: "Room C",
    description: "This is the image description",
  },
  {
    src: "https://i.pinimg.com/474x/6e/3b/fd/6e3bfd71c32badc4e6a4cbad754fbc1d.jpg",
    width: 585,
    height: 415,
    title: "Room C",
    description: "This is the image description",
  },
];

export const galleryPhotos: PhotoType[] = [
  {
    src: "https://i.pinimg.com/474x/9e/95/dd/9e95dd0fe8fcf76b50056ee3e67433e2.jpg",
    width: 585,
    height: 415,
    title: "Room C",
    description: "This is the image description",
  },
  {
    src: "https://i.pinimg.com/474x/63/c2/e9/63c2e9f056b16f377f32d8e5576569c9.jpg",
    width: 585,
    height: 415,
    title: "Room C",
    description: "This is the image description",
  },
  {
    src: "https://i.pinimg.com/474x/b3/6b/a6/b36ba658a1c49fb7b351aa420c53cbc3.jpg",
    width: 585,
    height: 415,
    title: "Room C",
    description: "This is the image description",
  },
  {
    src: "https://i.pinimg.com/474x/14/b2/51/14b251fe7e6934c8843102184017466b.jpg",
    width: 585,
    height: 415,
    title: "Room C",
    description: "This is the image description",
  },
  {
    src: "https://i.pinimg.com/474x/e7/23/e4/e723e4653bfac6136ef8cc84a3779a8d.jpg",
    width: 585,
    height: 415,
    title: "Room C",
    description: "This is the image description",
  },
  {
    src: "https://i.pinimg.com/474x/4a/90/f5/4a90f5925c9b4d305b195baa12182c5f.jpg",
    width: 585,
    height: 415,
    title: "Room C",
    description: "This is the image description",
  },
  {
    src: "https://i.pinimg.com/474x/32/55/7f/32557f295a1ecebdee23e4aa9bc6061f.jpg",
    width: 585,
    height: 415,
    title: "Room C",
    description: "This is the image description",
  },
  {
    src: "https://i.pinimg.com/474x/6e/3b/fd/6e3bfd71c32badc4e6a4cbad754fbc1d.jpg",
    width: 585,
    height: 415,
    title: "Room C",
    description: "This is the image description",
  },
];

export const lightBoxImages = lightBoxPhotos.map((photo: PhotoType) => {
  return {
    src: photo.src,
    width: photo.width,
    height: photo.height,
    title: photo.title,
    description: photo.description,
  };
});
