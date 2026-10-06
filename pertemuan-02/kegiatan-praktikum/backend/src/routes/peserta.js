const express = require('express');

const router = express.Router({
  mergeParams: true,
});

router.get('/', (req, res) => {
  const { jadwalId } = req.params;

  res.status(200).json({
    status: true,
    message: 'Daftar peserta berhasil diambil',
    data: {
      jadwalId: Number(jadwalId),
      peserta: [],
    },
  });
});

module.exports = router;