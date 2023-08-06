from zlib import compress as 压缩, decompress as 解压
import sys, traceback

最小=9
最快=1
流瀚黄豆='😅😡😄🤗🧐😋😇😨🤔🤬👏🐴🤤💧🌹😁'
class 瀚化错误(ValueError):pass

def 加密(人话,模式=最小):
    鬼话=压缩(人话.encode(),模式).hex()
    瀚话="瀚曰："
    for 鬼符 in 鬼话:
        瀚话+=流瀚黄豆[int(鬼符,16)]
    return 瀚话

def 解密(瀚话):
    if 瀚话.startswith("瀚曰："):
        瀚语=瀚话[3:]
    else:
        raise 瀚化错误(f"捏麻麻爹, {瀚话}不是👴说的😅")
    鬼话=""
    for 瀚字 in 瀚语:
        鬼话+=hex(流瀚黄豆.index(瀚字))[2:]
    人话=解压(bytes.fromhex(鬼话))
    return 人话.decode()

if __name__ == "__main__":
    print("瀚曰加密 for Python v1.1")
    print("1. 加密")
    print("2. 解密")
    print("3. 退出")

    while (模式 := input("请选择模式(输入序号): ")):
        if 模式 not in ["1","2","3"]:
            print("输入非法")
        else:
            break


    if 模式 == "1":
        while (人话 := input("请输入人话: ")):
            try:
                print(加密(人话))
            except:
                traceback.print_exc(0)

    elif 模式 == "2":
        while (瀚话 := input("请输入瀚话: ")):
            try:
                print(解密(瀚话))
            except:
                traceback.print_exc(0)
