import Student from "../../models/student";

export const findAll = async (req, res) => {
  try {
    const students = await Student.find();

    res.json({
      ok: true,
      data: students,
    });
  } catch (error) {
    res.json({
      ok: false,
      data: error.message,
    });
  }
};

export const create = async (req, res) => {
  try {
    const { body } = req;
    const student = new Student(body);
    student.save();

    res.json({
      ok: true,
      data: student,
    });
  } catch (error) {
    res.json({
      ok: false,
      data: error.message,
    });
  }
};

export const update = async (req, res) => {

  try {
    const { body } = req;

    const student = await Student.updateOne(
      {
        name: body.name
      },
      {
        name: body.name,
        lastname: body.lastname,
        email: body.email,
        dni: body.dni,
        addres: body.addres,
        phone: body.phone,
        status: body.status
      }
    );

    res.json({
      ok: true,
      data: student
    });
  } catch (error) {

    res.json({
      ok: false,
      data: error.message
    });
  }
};

export const deleteOne = async (req, res) => {

  try {
    const { body } = req;

    const student = await Student.deleteOne({
      name: body.name
    });

    res.json({
      ok: true,
      data: student
    });
  } catch (error) {

    res.json({
      ok: false,
      data: error.message
    });
  }
};