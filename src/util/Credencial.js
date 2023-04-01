import cloudinary from "cloudinary-core";

const handleDelete = async (imgObj) => {
  
  const cloudinaryConfig = {
    cloudName: "dstgujjlr",
    apiKey: "847755325632252",
    apiSecret: "tu3p5IBBOcCyjBbCIlw8uuc5RMI",
  };
  const cloudinaryCore = new cloudinary.Cloudinary(cloudinaryConfig);

  try {
    const response = await cloudinaryCore.api.delete_resources(
      imgObj
    );
  
    return response.deleted[imgObj] === "deleted";
  } catch (error) {
    console.error("Error al borrar la imagen de Cloudinary:", error);
    return false;
  }
};

export { handleDelete };