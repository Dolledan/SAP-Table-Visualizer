from pathlib import Path

def copy_from_parent(srcName, tarName, prefix=""):
    current_dir = Path(__file__).resolve().parent
    parent_dir = current_dir.parent
    
    source = parent_dir / srcName
    target = current_dir / tarName
    
    # Originalinhalt lesen
    original_content = source.read_text(encoding="utf-8")
    new_content = prefix + original_content

    # Neue Datei schreiben
    target.write_text(new_content, encoding="utf-8")

copy_from_parent("tables2.txt", "data.js", "const DATA = ")