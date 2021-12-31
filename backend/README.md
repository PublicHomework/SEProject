# ArenAI 简介

ArenAI 是一个智能对抗体平台，用户可在平台中选择游戏，对其他用户提交的智能体代码展开人机对抗，或Bot对抗。

# 项目配置

该项目有以下依赖

```
pip==21.3.1
django==3.2.8
djangorestframework=3.13.1
channels==3.0.4
```

项目文件`ArenAI/settings.py`中包含三个变量：

```
BOT_ENV_DIR = "..." （运行环境存储位置）
BOT_WORKSPACE_DIR = "..." （Bot文件存储位置）
TEMP_DIR = "..." （临时文件存储位置）
```

将这三个目录设置到合适位置。

运行以下指令，启动调试版本：

```
python manage.py runserver
```

部署参考文档：https://channels.readthedocs.io/en/latest/deploying.html#http-and-websocket
