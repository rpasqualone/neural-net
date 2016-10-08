(function ($) {
    $(function() {
        // AND Gate
        var and_gate = new brain.NeuralNetwork();

        var index1 = Math.floor((Math.random() * 2) + 0);
        var index2 = Math.floor((Math.random() * 2) + 0);

        var and_options = {
            errorThresh: 0.002,  // error threshold to reach
            iterations: 2000,   // maximum training iterations
            learningRate: 0.4    // learning rate

            /*,log: true,           // console.log() progress periodically
            logPeriod: 100       // number of iterations between logging*/
        }

        //train net for
        var and_training = and_gate.train([
            {input: [0, 0], output: [0]},
            {input: [0, 1], output: [0]},
            {input: [1, 0], output: [0]},
            {input: [1, 1], output: [1]}
        ], and_options);

        var and_input = [index1, index2];
        var and_output = and_gate.run(and_input);

        $('#and_results')
            .append('<b>AND Gate Results</b> <br/>')
            .append('Iterations: ' + and_training.iterations + '<br/>')
            .append('Input: [' + and_input[0] + ', ' + and_input[1] + ']<br/>')
            .append('Output: ' + and_output + '<br/><hr>')
            .append('Error Threshold: ' + and_options.errorThresh + '<br/>')
            .append('Max Iterations: ' + and_options.iterations + '<br/>')
            .append('Learning Rate: ' + and_options.learningRate);

        //var json = and_gate.toJSON();
        //console.log(json);

        // OR Gate
        var or_gate = new brain.NeuralNetwork();

        var or_options = {
            errorThresh: 0.004,  // error threshold to reach
            iterations: 1000,   // maximum training iterations
            learningRate: 0.3    // learning rate

            /*,log: true,           // console.log() progress periodically
            logPeriod: 100       // number of iterations between logging*/
        };

        var or_training = or_gate.train([
            {input: [0, 0], output: [0]},
            {input: [0, 1], output: [1]},
            {input: [1, 0], output: [1]},
            {input: [1, 1], output: [1]}
        ], or_options);

        var or_input = [index1, index2];
        var or_output = or_gate.run(or_input);

        $('#or_results')
            .append('<b>OR Gate Results</b> <br/>')
            .append('Iterations: ' + or_training.iterations + '<br/>')
            .append('Input: [' + or_input[0] + ', ' + or_input[1] + ']<br/>')
            .append('Output: ' + or_output  + '<br/><hr>')
            .append('Error Threshold: ' + or_options.errorThresh + '<br/>')
            .append('Max Iterations: ' + or_options.iterations + '<br/>')
            .append('Learning Rate: ' + or_options.learningRate);

        //console.log(or_training.iterations)

        // XOR Gate
        var xor_gate = new brain.NeuralNetwork();

        var xor_options = {
            errorThresh: 0.003,  // error threshold to reach
            iterations: 5000,   // maximum training iterations
            learningRate: 0.4    // learning rate

            ,log: true,           // console.log() progress periodically
            logPeriod: 100       // number of iterations between logging*/
        };

        var xor_training = xor_gate.train([
            {input: [0, 0], output: [0]},
            {input: [0, 1], output: [1]},
            {input: [1, 0], output: [1]},
            {input: [1, 1], output: [0]}
        ], xor_options);

        var xor_input = [index1, index2]
        var xor_output = xor_gate.run(xor_input);

        $('#xor_results')
            .append('<b>XOR Gate Results</b> <br/>')
            .append('Iterations: ' + xor_training.iterations + '<br/>')
            .append('Input: [' + xor_input[0] + ', ' + xor_input[1] + ']<br/>')
            .append('Output: ' + xor_output + '<br/><hr>')
            .append('Error Threshold: ' + xor_options.errorThresh + '<br/>')
            .append('Max Iterations: ' + xor_options.iterations + '<br/>')
            .append('Learning Rate: ' + xor_options.learningRate);

        //console.log(xor_training.iterations)
    });
})(jQuery);