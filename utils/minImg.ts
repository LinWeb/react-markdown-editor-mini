export default (files: any, callback: (formData: FormData) => void) => {
  for (let i = 0; i < files.length; i++) {
    // files是一个数组，针对一次上传多张图片的情况
    let file = files[i];
    const reader = new FileReader();
    reader.readAsDataURL(file); // 异步以base64的形式读取图片内容
    reader.onload = async e => {
      let src = (e.target as any).result; // 获取图片内容
      const img = new Image();
      img.src = String(src); // 异步加载图片内容
      img.onload = () => {
        const w = img.width; // 获取图片的宽度
        const h = img.height; // 获取图片的高度
        const canvas = document.createElement("canvas"); // 创建canvas

        const anw = document.createAttribute("width"); // 创建宽度节点
        anw.nodeValue = `${w}px`; // 宽度节点赋值
        const anh = document.createAttribute("height"); // 创建高度节点
        anh.nodeValue = `${h}px`; // 高度节点赋值

        canvas.setAttributeNode(anw); // 设置canvas的宽度
        canvas.setAttributeNode(anh); // 设置canvas的高度

        const ctx = canvas.getContext("2d"); // 返回一个用于画布上绘图的环境
        ctx.fillStyle = "#fff"; // 用白色填充画布
        ctx.fillRect(0, 0, w, h); // 在画布上绘制指定宽度和高度的矩形
        ctx.drawImage(img, 0, 0, w, h); // 在画布上绘制图片

        canvas.toBlob(
          blob => {
            // 画布生成一个blob对象
            let formData = new FormData(); // 创建表单数据对象
            formData.append("file", blob, name); // 添加数据
            callback(formData);
            // 最后用post方式发送请求，注意请求请求头部加上'Content-Type': 'multipart/form-data'
          },
          "image/jpeg",
          0.7
        ); //'image/jpeg'是图片格式，0.7是压缩率
      };
    };
  }
};
