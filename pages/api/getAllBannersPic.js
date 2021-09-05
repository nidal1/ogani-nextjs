
export default function handler(req, res) {
    const banners = [
        'banner-1',
        'banner-2'
    ];
    res
      .status(200)
      .json(banners);
  }
  