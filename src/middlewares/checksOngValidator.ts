import * as Yup from "yup";

const requestSchema = Yup.object({

    name: Yup.string().required(),
    email: Yup.string().required().email(),
    whatsapp: Yup.string().required().length(11),
    city: Yup.string().required(),
    uf: Yup.string().required()

});

export default requestSchema;
