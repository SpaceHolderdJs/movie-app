import * as Yup from "yup";

export const movieSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    year: Yup.string()
        .matches(/^\d{4}$/, "Year must be a valid 4-digit year")
        .test('is-less-than-2023', 'Year must be less than 2023', value => {
            const yearAsNumber = parseInt(value!, 10);
            return yearAsNumber < 2023;
        })
        .required("Year is required"),
});
