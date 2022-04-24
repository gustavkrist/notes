import regex as re
import os


def format(text, dir):
    del_comments = re.compile(r"<!---->")
    # quotate_admon_titles = re.compile(
    #     r'((?:\?{3}|!{3})\+? \b\w+\b )"?((?:(?<!").(?!"))*)"?'
    # )
    # fix_paths = re.compile(r'(src=")(assets/[\w\-_]+.\w+)')
    # corr_path = dir[dir.rfind("docs") + 5 : dir.rfind("/") + 1]
    text = re.sub(del_comments, "", text)
    # text = re.sub(quotate_admon_titles, r'\1"\2"', text)
    # text = re.sub(fix_paths, r"\1../\2", text)
    return text


path = os.getcwd()


def format_dir(dir):
    if os.path.isdir(dir):
        for subdir in os.listdir(dir):
            format_dir(dir + f"/{subdir}")
    elif dir[dir.rfind(".") :] == ".md":
        # print(dir[dir.rfind("/") + 1 :])
        with open(dir, "r") as f:
            new_text = format(f.read(), dir)
        with open(dir, "w") as f:
            f.write(new_text)


format_dir(path + f"/docs")
