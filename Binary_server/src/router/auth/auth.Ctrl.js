const models = require('../../model');

exports.login = async (req, res) => {
    const { body } = req;

    try {
        const user1 = await models.User.findOne({
            where: {
                id: body.id,
            },
        });

        if(!user1) {
            return res.status(401).json({
                message: "아이디를 확인해주세요!",
            });
        }

        const user = await models.User.findOne({
            where: {
                id: user1.id,
                pw: body.pw,
            },
        });

        if(!user) {
            return res.status(401).json({
                message: "비밀번호를 학인해주세요!",
            });
        }

        console.log("로그인 성공!");
        return res.status(200).json({
            message: "로그인 성공!",
            data: {
                user,
            }
        });


    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}

exports.register =  async (req, res) => {
    const { body } = req;

    try {
        const data = await models.User.findOne({
            where: {
                id: body.id,
            },
        });

        if (data) {
            return res.status(401).json({
                message: "이미 사용중인 ID입니다",
            });
        }

        await models.User.create({
            id: body.id,
            pw: body.pw,
            name: body.name,
            address: body.address,
            email: body.email,
        })

        console.log("회원가입 성공!");
        return res.status(200).json({
            message: "회원가입 성공!",
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}

exports.modifyAuth = async (req, res) => {
    const { body } = req;
    const { id } = req.params;

    try {

        const user = await models.User.findOne({
            where: {
                id: id,
            },
        });

        if(!user) {
            return res.status(401).json({
                message: "아이디를 확인해주세요!",
            });
        }

        await models.User.update(body, {
            where: {
                id,
            }
        });

        return res.status(200).json ({
            message: "계정정보 수정 성공!",
        });
        
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}