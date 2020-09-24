const models = require('../../model');

exports.postDog = async (req, res) => {
    const { body } = req;

    try {
        await models.Dog.create({
            userId: body.id,
            dogName: body.dogName,
            breed: body.breed,
            weight: body.weight,
            bloodType: body.bloodType,
        });

        console.log("정보 넣기 성공!");
        return res.status(200).json({
            message: "정보 넣기 성공!",
            data: {
                dogName: body.dogName,
                breed: body.breed,
                bloodType: body.bloodType,
            }
        });
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: "서버 오류",
        })
    }
}
