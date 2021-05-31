const correctTail = (body, tail) => ((body.substr(body.length - (tail.length))) == tail) ? true : false;

correctTail("Fox", "x") //, true);
correctTail("Rhino", "o") //, true);
correctTail("Meerkat", "t") //, true);