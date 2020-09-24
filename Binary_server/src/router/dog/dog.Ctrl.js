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
        });
    }
}

exports.getDog = async (req, res) => {
    try {
        const doglist = await models.Dog.findAll ({
            where: {
                userId: req.query.userId,
            }
        });

        return res.status(200).json ({
            message: "강아지 리스트 불러오기 성공",
            data: {
                doglist,
            }
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json ({
            message: "서버 오류",
        });
    }
}

exports.modifyDog = async (req, res) => {
    const { body } = req;
    const { idx } = req.params;

    try {
        await models.Dog.update(body, {
            where: {
                idx,
            }
        });

        return res.status(200).json ({
            message: "강아지 정보 수정 성공!",
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json ({
            message: "서버 오류",
        });
    }
}