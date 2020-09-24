const models = require('../../model');
const sequelize = require('sequelize');
const Op =  sequelize.Op;

exports.GetBhospital = async (req, res) => {
    try {
        let hospitals = []
        if (req.query.keyword) {
            hospitals = await models.Bhospital.findAll ({
                where: {
                    [Op.or]: [
                        {
                            hospital_name: {
                                [Op.like]: "%" + req.query.keyword + "%"
                            }
                        },
                        {
                            address: {
                                [Op.like]: "%" + req.query.keyword + "%"
                            }
                        },
                    ]
                },
                raw: true,
            });
        } else {
            hospitals = await models.Bhospital.findAll({});
        }

        return res.status(200).json ({
            message: "조회 성공",
            data: {
                hospitals,
            }
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}